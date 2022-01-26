<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    // use HasFactory;
    protected $fillable = ['Lesson_ID','Course_ID','Lesson_header','Lesson_description','Lesson_uploadedAt','Lesson_video','Lesson_view'];
    protected $table = 'lesson';
    protected $primaryKey = 'lesson_ID';
    const CREATED_AT = 'Lesson_uploadedAt';
    const UPDATED_AT = 'Lesson_updatedAt';
    // public $timestamps = false;
    protected $hidden = ['Lesson_uploadeddAt','Lesson_updatedAt','Lesson_approve','Lesson_isFree'];
}
