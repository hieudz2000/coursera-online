<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\TeacherInformation;
use App\Models\User;


class AuthController extends Controller
{
    //
    public function username()
    {
        return 'User_account';
    }
    public function register (Request $request)
    {
        $account = $request->input('account');
        $password = Hash::make(($request->input('password')));
        $DoB = $request->input('DoB');
        $phone = $request->input('phone');
        $role = $request->input('role');
        $name = $request->input('name');
        $image = "http://ativn.edu.vn/wp-content/uploads/2018/03/user.png";
        $isExisted = User::where('User_account',$account)->first();

        if ($isExisted) {
            return response()->json(['error'=>'Email is existed'],409);
        }
        else{
            $newUser = new User;
            $newUser->User_account = $account;
            $newUser->User_password = $password;
            $newUser->User_name = $name;
            $newUser->User_DoB = $DoB;
            $newUser->User_phone = $phone;
            $newUser->User_role = $role;
            $newUser->User_image = $image;
            $newUser->save();
            if($role == 1)
            {
                $newTeacherInfor = new TeacherInformation;
                $newTeacherInfor->Teacher_ID = $newUser->User_ID;
                $newTeacherInfor->save();
            }
            return response()->json(['status'=>'Register successfully'],201);
        }
    }

    public function login(Request $request)
    {
        $account = $request->input('account');
        $password = $request->input('password');

        if (Auth::attempt(['User_account' => $account, 'password' => $password])) {
            $user = Auth::user();
            $success['token'] = $user->createToken('access_token')->accessToken;
            $success['name'] = $user->User_name;
            $success['image'] = $user->User_image;
            // echo $user;
            return response()->json([
                'success' => $success,
                'message' => 'Login successfully',
            ],200);
        }
        else {
            return response()->json(['error'],400);
        }
    }

    public function logout()
    {

    }

    public function getUserDetails()
    {
        $user = Auth::user();
        // echo  "con cho". $user;
        // echo $request->get('ID');
//        return response()->json(['message'=>'ngua don','image' => $user->User_image,'userName' => $user->User_name],200);
        return response()->json( $user,200);
    }

    // public function detailsUser()
    // {
    //     $user = Auth::user();
    //     return response()->json()
    // }
}
