<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');
Route::inertia('/our-work', 'our-work')->name('our-work');
Route::inertia('/about', 'about')->name('about');
Route::inertia('/contact', 'contact')->name('contact');
Route::get('/work/{slug}', function (string $slug) {
    return inertia('project', ['slug' => $slug]);
})->name('project');
