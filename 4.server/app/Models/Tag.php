<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    // use HasFactory;
    protected $fillable = ['Category_ID','Tag_name','Tag_ID'];
    protected $table = 'tag';
    protected $primaryKey = 'Tag_ID';
    public $timestamps = false;
}
