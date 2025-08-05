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
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('title')->comment('Article title');
            $table->string('slug')->unique()->comment('Article slug for URL');
            $table->text('excerpt')->comment('Article excerpt/summary');
            $table->longText('content')->comment('Article content');
            $table->string('featured_image')->nullable()->comment('Featured image path');
            $table->string('category')->default('news')->comment('Article category');
            $table->enum('status', ['draft', 'published'])->default('draft')->comment('Article status');
            $table->timestamp('published_at')->nullable()->comment('Publication date');
            $table->foreignId('user_id')->constrained();
            $table->timestamps();
            
            $table->index('slug');
            $table->index('category');
            $table->index(['status', 'published_at']);
            $table->index(['category', 'status']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};