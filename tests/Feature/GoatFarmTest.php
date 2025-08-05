<?php

use App\Models\Article;
use App\Models\FarmInfo;
use App\Models\GalleryItem;
use App\Models\GoatType;
use App\Models\User;

beforeEach(function () {
    // Create test data
    FarmInfo::factory()->create();
    GoatType::factory()->count(3)->create();
    GalleryItem::factory()->count(5)->create();
    
    $user = User::factory()->create();
    Article::factory()->count(3)->create(['user_id' => $user->id]);
});

it('displays farm content on home page', function () {
    $response = $this->get('/');

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => 
        $page->component('welcome')
            ->has('farmInfo')
            ->has('goatTypes')
            ->has('galleryItems')
            ->has('latestArticles')
    );
});

it('displays goat types page correctly', function () {
    $response = $this->get('/goat-types');

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => 
        $page->component('goat-types/index')
            ->has('goatTypes.data', 3)
    );
});

it('displays articles page correctly', function () {
    $response = $this->get('/articles');

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => 
        $page->component('articles/index')
            ->has('articles.data', 3)
            ->has('categories')
    );
});

it('requires authentication for admin dashboard', function () {
    $response = $this->get('/admin');

    $response->assertRedirect('/login');
});

it('allows authenticated users to access admin dashboard', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get('/admin');

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => 
        $page->component('admin/dashboard')
            ->has('stats')
            ->has('recentArticles')
    );
});

it('allows admin to create goat type', function () {
    $user = User::factory()->create();

    $goatData = [
        'name' => 'Kambing Test',
        'description' => 'Deskripsi kambing test',
        'characteristics' => 'Karakteristik test',
        'weight_range_min' => 20,
        'weight_range_max' => 40,
        'status' => 'active',
    ];

    $response = $this->actingAs($user)->post('/admin/goat-types', $goatData);

    $response->assertRedirect('/admin/goat-types');
    $this->assertDatabaseHas('goat_types', ['name' => 'Kambing Test']);
});

it('allows admin to create article', function () {
    $user = User::factory()->create();

    $articleData = [
        'title' => 'Artikel Test',
        'excerpt' => 'Ringkasan artikel test',
        'content' => 'Konten artikel test yang panjang',
        'category' => 'test',
        'status' => 'published',
    ];

    $response = $this->actingAs($user)->post('/admin/articles', $articleData);

    $response->assertRedirect('/admin/articles');
    $this->assertDatabaseHas('articles', [
        'title' => 'Artikel Test',
        'user_id' => $user->id,
    ]);
});

it('shows published articles on public page', function () {
    $user = User::factory()->create();
    $article = Article::factory()->create([
        'user_id' => $user->id,
        'status' => 'published',
        'published_at' => now(),
    ]);

    $response = $this->get('/articles');

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => 
        $page->where('articles.data.0.title', $article->title)
    );
});

it('hides draft articles from public page', function () {
    // Clear existing published articles
    Article::query()->delete();
    
    $user = User::factory()->create();
    Article::factory()->create([
        'user_id' => $user->id,
        'status' => 'draft',
        'published_at' => null,
    ]);

    $response = $this->get('/articles');

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => 
        $page->has('articles.data', 0)
    );
});