<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function getProfile(Request $request)
    {
        $userID = $request->get('ID');
        $userInformation = User::where('User_ID','=',$userID)->get(['User_account','User_name','User_DoB','User_phone','User_image']);
        return response()->json(['information'=>$userInformation[0]],200);
    }

    public function updateProfile(Request $request)
    {
        $userID = $request->get('ID');
        $user = User::where('User_ID','=',$userID)->first();
        User::where('User_ID','=',$userID)->update([
            'User_name'=>$request->input('User_name'),
            'User_DoB' => $request->input('User_DoB'),
            'User_image' => $request->input('User_image')
        ]);
        $user = $user->fresh();
       return response()->json(['message' => 'Update Profile Succesfully','User_name'=>$user->User_name,'User_image'=>$user->User_image],200);
    }



}
