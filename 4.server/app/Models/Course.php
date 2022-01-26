<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    // use HasFactory;
            // protected $fillable = ['Course_ID','Author_ID','Course_header','Course_description','Course_price','Course_image',
    //         'Course_rate'];
    protected $hidden = ['Course_createdAt','Course_updatedAt','Course_approve'];
    protected $table = 'course';
    protected $primaryKey = 'Course_ID';
    // public $timestamps = false;
    const CREATED_AT = 'Course_createdAt';
    const UPDATED_AT = 'Course_updatedAt';

    public function courseEnrollment () {
        return $this->hasMany('App\Models\CourseEnrollment','Course_ID','Course_ID');
    }
}
