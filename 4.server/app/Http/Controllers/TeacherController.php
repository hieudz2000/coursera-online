<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CourseEnrollment;
use App\Models\PaymentHistory;
use App\Models\User;
use App\Models\Course;
use App\Models\TeacherInformation;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TeacherController extends Controller
{
    //

    public function tongQuan() {

        $user = Auth::user()->User_ID;
        $courseTotal = User::find($user)
            ->where("User_ID", $user)
            ->join('course','course.Author_id', "user.User_ID")->count();
        $studentTotal = DB::select("SELECT COUNT(distinct ce.User_ID) as total
                    FROM courseenrollment ce, course c
                    WHERE c.Author_ID = $user
                    AND ce.Course_ID = c.Course_ID
                    GROUP BY c.Author_ID");

        $revune = DB::select(
            "SELECT SUM(p.Payment_price) as total
                    FROM courseenrollment ce, course c, paymenthistory p
                    WHERE c.Author_ID = $user
                    AND ce.Course_ID = c.Course_ID
                    AND ce.Payment_ID = p.Payment_ID
                    GROUP BY c.Author_ID"
                            );
        $payTotal = DB::select(
                "SELECT COUNT(ce.Payment_ID) as total
                FROM courseenrollment ce, course c
                WHERE c.Author_ID = $user
                AND ce.Course_ID = c.Course_ID
                GROUP BY c.Author_ID
                "
        );
        return response()->json(
            [
                'courseTotal' => !empty($courseTotal) ? $courseTotal : 0,
             'studentTotal' =>  !empty($studentTotal[0]->total) ? $studentTotal[0]->total : 0,
             'revune' => !empty($revune[0]->total) ? $revune[0]->total : 0,
             'payTotal' => !empty($payTotal[0]->total) ? $payTotal[0]->total : 0
                ],
            200);
    }

    public function newStudent () {
        $newStudent = array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        $revune = array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

        $user = Auth::user()->User_ID;

        $value = DB::select("SELECT EXTRACT(MONTH FROM Payment_date) month, COUNT(User_ID) as total
                    FROM courseenrollment ce, course c
                    WHERE c.Author_ID = $user
                    AND ce.Course_ID = c.Course_ID
                    GROUP BY c.Author_ID, EXTRACT(MONTH FROM Payment_date)");

        $value2 = DB::select("
            SELECT EXTRACT(MONTH FROM Payment_date) month, SUM(p.Payment_price) as total
            FROM courseenrollment ce, course c, paymenthistory p
            WHERE c.Author_ID = $user
            AND ce.Course_ID = c.Course_ID
            AND ce.Payment_ID = p.Payment_ID
            GROUP BY c.Author_ID, EXTRACT(MONTH FROM Payment_date)
        ");

        foreach ($value as $item) {
            $newStudent[$item->month] = (int)$item->total;
        }

        foreach ($value2 as $item) {
            $revune[$item->month] = (int)$item->total;
        }

        return response()->json([
          'newstudent' =>  $newStudent,
            'revune' => $revune
        ],200);
    }

    public function topStudents () {

        $user = Auth::user()->User_ID;
        $value = DB::select("SELECT ce.User_ID , u.User_name username,  COUNT(p.Payment_ID) 'order', SUM(p.Payment_price) price
                FROM courseenrollment ce, course c, paymenthistory p, user u
                WHERE c.Author_ID = $user
                AND ce.Course_ID = c.Course_ID
                AND ce.Payment_ID = p.Payment_ID
                AND ce.User_ID = u.User_ID
                GROUP BY ce.User_ID, u.User_name
                ORDER BY COUNT(p.Payment_ID) DESC");

        return response()->json(!empty($value)? $value : [],200);

    }

    public function newOrders () {

        $user = Auth::user()->User_ID;

        $value = DB::select("SELECT ce.User_ID as id, u.User_name as user, Payment_date as date, (p.Payment_price) price
            FROM courseenrollment ce, course c, paymenthistory p, user u
            WHERE c.Author_ID = $user
            AND ce.Course_ID = c.Course_ID
            AND ce.Payment_ID = p.Payment_ID
            AND ce.User_ID = u.User_ID
            ORDER BY Payment_date ASC");

        return response()->json(!empty($value)? $value : [],200);
    }

    public function listStudent () {
        $user = Auth::user()->User_ID;
        $value = DB::select("SELECT ce.User_ID id, u.User_name as name, u.User_phone phone, u.User_account as email ,COUNT(ce.Course_ID) total_order, SUM(p.Payment_price) as total_spend
                FROM courseenrollment ce, course c, user u, paymenthistory p
                WHERE c.Author_ID = $user
                AND ce.Course_ID = c.Course_ID
                AND ce.User_ID = u.User_ID
                AND ce.Payment_ID = p.Payment_ID
                GROUP BY c.Author_ID, u.User_ID, ce.User_ID, u.User_name, u.User_phone, u.User_account");

        return response()->json(!empty($value)? $value : [],200);
    }

    public function listCoures () {

        $user = Auth::user()->User_ID;
        $value = User::find($user)
            ->teacherCourse;

        for ($i = 0; $i < count($value); $i++) {
            $value[$i]->students  = CourseEnrollment::where('Course_ID',$value[$i]->Course_ID)->count();
        }

        return response()->json(!empty($value)? $value : [],200);
    }

    public function updateInforTeacher(Request $request)
    {

        $user = Auth::user()->User_ID;
        $id = $request->input('Teacher_ID');
        $header = $request->input('Teacher_header');
        $des = $request->input('Teacher_description');
        $teacherInfor = TeacherInformation::where('Teacher_ID',$user);
        $teacherInfor->update([
            'Teacher_header' => $header,
            'Teacher_description' => $des,
        ]);
        return response()->json([
            'status' => 'Update thanh cong'
        ],200);
    }

    public function listHistory () {

        $user = Auth::user()->User_ID;
        $value = DB::select("
            SELECT ur.User_ID as id, ur.User_name as username, c.Course_header coursename, p.Payment_price price, ce.Payment_date
            FROM user u, course c, courseenrollment ce, paymenthistory p, user ur
            WHERE u.User_ID = $user
            AND u.User_ID = c.Author_ID
            AND c.Course_ID = ce.Course_ID
            AND ce.Payment_ID = p.Payment_ID
            AND ur.User_ID = ce.User_ID
            ORDER BY ce.Payment_date DESC
        ");


        return response()->json(!empty($value)? $value : [],200);
    }


        public function getTeacherInformation(Request $request)
    {
        $teacherID = $request->route('teacherID');
        $teacherInformation = TeacherInformation::where('Teacher_ID','=',$teacherID)->first();
        return response()->json($teacherInformation,200);
    }

}
