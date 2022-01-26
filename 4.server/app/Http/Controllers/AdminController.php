<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\Course;
use App\Models\CourseEnrollment;
use App\Models\PaymentHistory;

class AdminController extends Controller
{
    //
    public function listTeacher () {

        $teacher = User::where('User_role','1')->get();
//
//        $value = DB::select('SELECT u.User_ID, u.User_name,User_account ,User_phone,COUNT(c.Course_ID) count
//            FROM user u, course c
//            WHERE u.User_role = 1
//            AND u.User_ID = c.Author_ID
//            GROUP BY u.User_ID, u.User_name, User_phone,User_account');

        for ($i = 0; $i < count($teacher) ; ++$i) {
            $teacher[$i]->total = (int) DB::table('paymenthistory')
                ->join('courseenrollment', 'courseenrollment.Payment_ID', 'paymenthistory.Payment_ID')
                ->join('course', 'courseenrollment.Course_ID', 'course.Course_ID')
                -> where('Author_ID', $teacher[$i]->User_ID)->sum('Payment_price');

            $teacher[$i]->count = (int) DB::table('course')
                ->where('Author_ID',$teacher[$i]->User_ID)->count();
        }

        return response()->json($teacher,200);
    }

    public function listStudent () {

        $value = DB::select('SELECT u.User_ID, u.User_name,User_account ,User_phone
            FROM user u
            WHERE u.User_role = 2');

        for ($i = 0; $i < count($value) ; ++$i) {
            $value[$i]->total = (int) DB::table('PaymentHistory')
                ->join('CourseEnrollment', 'CourseEnrollment.Payment_ID', 'PaymentHistory.Payment_ID')
                -> where('User_ID', $value[$i]->User_ID)->sum('Payment_price');

        }

        for ($i = 0; $i < count($value) ; ++$i) {
            $value[$i]->count = DB::table('CourseEnrollment')
                -> where('User_ID', $value[$i]->User_ID)->count();
        }
        return response()->json($value,200);
    }

    public function general () {

        $totalStudent = User::where('User_role', '1')->count();
        $totalteacher = User::where('User_role', '2')->count();
        $totalCourse = Course::all()->count();
        $totalPay = PaymentHistory::all()->sum('Payment_price');

        return response()->json([
            'totalStudent' => $totalStudent,
            'totalTeacher' => $totalteacher,
            'totalCourse'  => $totalCourse,
            'totalPay' => $totalPay,
        ],200);
    }

    public function chartData () {
        $newCourse = array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        $revune = array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);;

        $value = DB::table('courseenrollment')
            ->join('paymenthistory', 'paymenthistory.Payment_ID', 'courseenrollment.Payment_ID')
            ->groupByRaw('EXTRACT(MONTH FROM courseenrollment.Payment_date)')
            ->select(DB::raw('EXTRACT(MONTH FROM courseenrollment.Payment_date) month, SUM(Payment_price) total'))->get();

        $value2 = DB::table('course')
            ->groupByRaw('EXTRACT(MONTH FROM Course_createdAt)')
            ->select(DB::raw('EXTRACT(MONTH FROM Course_createdAt) month, COUNT(Course_ID) count'))->get();

        foreach ($value2 as $item) {
            $newCourse[$item->month] = (int)$item->count;
        }

        foreach ($value as $item) {
            $revune[$item->month] = (int)$item->total;
        }
//
        return response()->json([
            $newCourse,
            $revune
        ],200);
    }

    public function topTeacher() {

        $value = User::where('User_role', 1)->get();

        for ($i = 0; $i < count($value) ; ++$i) {
            $value[$i]->count = Course::with('courseenrollment')
                ->where('Author_ID', $value[$i]->User_ID)
                ->get()
                ->count();

            $value[$i]->total = (int) CourseEnrollment::join('course', 'course.Course_ID', 'courseenrollment.Course_ID')
                ->where('course.Author_ID', $value[$i]->User_ID)
                ->join('paymenthistory','paymenthistory.Payment_ID', 'courseenrollment.Payment_ID')
                ->groupBy('course.Author_ID')
                ->sum('Payment_price');
        }

        $value = json_decode(json_encode($value), true);;
        usort($value, function ($a, $b) {
            if ($a['total'] == $b['total']) {
                return -1;
            }
            return  ($a['total'] > $b['total']) ? -1 : 1;
        });

        return response()->json($value, 200);
    }

    public function topStudent () {
        $value = User::where('User_role',2)->get();

        for ($i = 0; $i < count($value); ++$i) {
            $value[$i]->count = CourseEnrollment::where('User_ID', $value[$i]->User_ID)
                ->count();

            $value[$i]->total = (int) CourseEnrollment::where('User_ID',$value[$i]->User_ID)
                ->join('paymenthistory', 'paymenthistory.Payment_ID', 'courseenrollment.Payment_ID')
                ->groupBy('User_ID')
                ->sum('paymenthistory.Payment_price');
        }

        $value = json_decode(json_encode($value), true);;
            usort($value, function ($a, $b) {
                if ($a['total'] == $b['total']) {
                    return -1;
                }
                return  ($a['total'] > $b['total']) ? -1 : 1;
        });

        return response()->json($value, 200);
    }
}
