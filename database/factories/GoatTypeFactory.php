<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\GoatType>
 */
class GoatTypeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $goatTypes = [
            [
                'name' => 'Kambing Boer',
                'description' => 'Kambing Boer adalah jenis kambing yang berasal dari Afrika Selatan. Dikenal dengan pertumbuhan yang cepat dan kualitas daging yang excellent.',
                'characteristics' => 'Tubuh besar, warna putih dengan kepala coklat, pertumbuhan cepat, daging berkualitas tinggi',
                'weight_range_min' => 35,
                'weight_range_max' => 90,
            ],
            [
                'name' => 'Kambing Etawa',
                'description' => 'Kambing Etawa atau PE (Peranakan Etawa) adalah hasil persilangan kambing lokal dengan kambing Etawa dari India. Terkenal sebagai penghasil susu terbaik.',
                'characteristics' => 'Telinga panjang, hidung mancung, tubuh besar, produksi susu tinggi',
                'weight_range_min' => 30,
                'weight_range_max' => 70,
            ],
            [
                'name' => 'Kambing Jawa Randu',
                'description' => 'Kambing lokal Indonesia yang memiliki adaptasi sangat baik terhadap iklim tropis dan cuaca ekstrem di Indonesia.',
                'characteristics' => 'Tahan penyakit, adaptasi baik, ukuran sedang, berbulu pendek',
                'weight_range_min' => 20,
                'weight_range_max' => 40,
            ],
            [
                'name' => 'Kambing Saanen',
                'description' => 'Kambing perah terbaik dunia yang berasal dari Swiss. Memiliki produksi susu yang sangat tinggi dengan kadar lemak rendah.',
                'characteristics' => 'Warna putih bersih, tubuh besar, telinga tegak, produksi susu sangat tinggi',
                'weight_range_min' => 45,
                'weight_range_max' => 80,
            ],
            [
                'name' => 'Kambing Kacang',
                'description' => 'Kambing asli Indonesia yang memiliki ukuran kecil namun sangat produktif dan tahan terhadap berbagai kondisi lingkungan.',
                'characteristics' => 'Ukuran kecil, warna bervariasi, tahan penyakit, mudah dipelihara',
                'weight_range_min' => 15,
                'weight_range_max' => 30,
            ],
            [
                'name' => 'Kambing Anglo Nubian',
                'description' => 'Kambing dwiguna (daging dan susu) yang berasal dari Inggris. Memiliki karakteristik fisik yang unik dengan telinga panjang dan hidung cembung.',
                'characteristics' => 'Telinga panjang menjuntai, hidung cembung, berbagai warna, produksi susu dan daging baik',
                'weight_range_min' => 40,
                'weight_range_max' => 85,
            ],
        ];

        $goatType = $this->faker->randomElement($goatTypes);
        
        return [
            'name' => $goatType['name'],
            'description' => $goatType['description'],
            'characteristics' => $goatType['characteristics'],
            'weight_range_min' => $goatType['weight_range_min'],
            'weight_range_max' => $goatType['weight_range_max'],
            'status' => 'active',
        ];
    }
}