<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeacherInformation extends Model
{
    // use HasFactory;
    protected $table = 'teacherinformation';
    const CREATED_AT = NULL;
    const UPDATED_AT = 'Teacher_updatedAt';
    // protected $primaryKey = 'Teacher_ID';
}
