<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Auth;
class TeacherAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {   
        $user = Auth::user();
        // echo $user;
        if($user)
        {
            if($user->User_role == 1)
            {   
                $request->attributes->add(['Teacher_ID'=>$user->User_ID]);
                return $next($request);
            }
            return response()->json(['message'=>'Dang nhap bang tk teacher di'],403);
        }
        else return response()->json(['message'=>'Dang nhap bang tk teacher di'],403);
    }
}
