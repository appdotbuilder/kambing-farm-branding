<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('farm_info', function (Blueprint $table) {
            $table->id();
            $table->string('title')->comment('Farm title/name');
            $table->text('description')->comment('Farm description');
            $table->text('history')->nullable()->comment('Farm history');
            $table->string('location')->nullable()->comment('Farm location');
            $table->string('phone')->nullable()->comment('Contact phone');
            $table->string('email')->nullable()->comment('Contact email');
            $table->text('vision')->nullable()->comment('Farm vision');
            $table->text('mission')->nullable()->comment('Farm mission');
            $table->timestamps();
            
            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('farm_info');
    }
};