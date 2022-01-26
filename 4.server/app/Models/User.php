<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use App\Models;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = ['User_account','User_password','User_name','User_DoB','User_phone',
            'User_createdAt','User_updatedAt','User_image','User_role'];
    protected $table = 'user';
    protected $primaryKey = 'User_ID';
    const CREATED_AT = 'User_createdAt';
    const UPDATED_AT = 'User_updatedAt';
    // protected $fillable = [
    //     'User_ID', 'User_cccount', 'User_password','User_name',
    // ];

    public function getAuthPassword()
    {
        return $this->User_password;
    }

    public function username()
    {
        return 'User_account';
    }
    public $timestamps = true;

    public function teacherCourse() {
        return $this->hasMany('course','Author_ID','User_ID');
    }
}
