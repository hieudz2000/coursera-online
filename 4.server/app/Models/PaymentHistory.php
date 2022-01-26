<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentHistory extends Model
{
    // use HasFactory;
    protected $table = 'paymenthistory';
    protected $primaryKey = 'Payment_ID';
    public $timestamps = false;

    public function paymentCourse() {
        return $this->hasOne('App\Models\courseEnrollment','Payment_ID','Payment_ID');
    }
}
