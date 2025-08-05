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
        Schema::create('goat_types', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('Goat type name');
            $table->text('description')->comment('Goat type description');
            $table->string('image')->nullable()->comment('Goat type image path');
            $table->text('characteristics')->nullable()->comment('Goat characteristics');
            $table->decimal('weight_range_min', 5, 2)->nullable()->comment('Minimum weight in kg');
            $table->decimal('weight_range_max', 5, 2)->nullable()->comment('Maximum weight in kg');
            $table->enum('status', ['active', 'inactive'])->default('active')->comment('Status');
            $table->timestamps();
            
            $table->index('name');
            $table->index(['status', 'created_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('goat_types');
    }
};