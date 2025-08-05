<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\FarmInfo;
use App\Models\GalleryItem;
use App\Models\GoatType;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create admin user
        $adminUser = User::factory()->create([
            'name' => 'Admin Peternakan',
            'email' => 'admin@peternakan.com',
        ]);

        // Create test user
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        // Seed farm info
        FarmInfo::factory()->create();

        // Seed goat types
        GoatType::factory()->count(6)->create();

        // Seed gallery items
        GalleryItem::factory()->count(12)->create();

        // Seed articles
        Article::factory()->count(10)->create([
            'user_id' => $adminUser->id,
        ]);
    }
}
