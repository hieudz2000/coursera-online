<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseEnrollment extends Model
{
    // use HasFactory;
    protected $table = 'courseenrollment';
    // protected $primaryKey = 'Course_ID';
    const CREATED_AT = 'Payment_date';
    const UPDATED_AT = NULL;
    // public $timestamps = false;
}
