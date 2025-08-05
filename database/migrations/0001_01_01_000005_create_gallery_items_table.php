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
        Schema::create('gallery_items', function (Blueprint $table) {
            $table->id();
            $table->string('title')->comment('Gallery item title');
            $table->text('description')->nullable()->comment('Gallery item description');
            $table->string('image')->comment('Image path');
            $table->string('category')->default('general')->comment('Gallery category');
            $table->integer('sort_order')->default(0)->comment('Sort order for display');
            $table->enum('status', ['active', 'inactive'])->default('active')->comment('Status');
            $table->timestamps();
            
            $table->index('category');
            $table->index(['status', 'sort_order']);
            $table->index(['category', 'status']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gallery_items');
    }
};