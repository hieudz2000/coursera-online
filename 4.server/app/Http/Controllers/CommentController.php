<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\Comment;
use App\Models\User;

class CommentController extends Controller
{
    //
    public function showComment(Request $request)
    {
        $listsComment = array();
        $Course_ID = $request->route('courseID');
        $Comments_in_course = Comment::where('Comment_in','=',$Course_ID)->get();
        foreach($Comments_in_course as $comment)
        {
            $user = User::where('User_ID','=',$comment->Comment_by)->get(['User_name']);
            $list =  array('comment' =>$comment , 'name' => ($user[0]->User_name));
            array_push($listsComment,$list);
        }
        return response()->json($listsComment,201);
    }
}
