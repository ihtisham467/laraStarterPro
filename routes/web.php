<?php

use App\Http\Controllers\AppSettingController;
use App\Http\Controllers\Locations\CityController;
use App\Http\Controllers\Locations\NeighbourhoodController;
use App\Http\Controllers\Locations\ProvinceController;
use App\Http\Controllers\Permissions\PermissionCategoryController;
use App\Http\Controllers\Permissions\PermissionController;
use App\Http\Controllers\Permissions\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Models\PermissionCategory;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/about', fn () => Inertia::render('About'))->name('about');

    Route::get('users', [UserController::class, 'index'])->name('users.index');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    Route::resource('roles', RoleController::class);
    Route::resource('permissions', PermissionController::class);
    Route::resource('permission-categories', PermissionCategoryController::class);
    Route::get('/roles-permissions/{id}', [RoleController::class, 'rolePermissions'])->name('roles.permissions');
    Route::post('/roles-permissions/{id}', [RoleController::class, 'updateRolePermissions'])->name('roles.update-permissions');
    Route::get('/app-setting', [AppSettingController::class, 'index'])->name('app-setting.index');
    Route::post('/app-setting', [AppSettingController::class, 'update'])->name('app-setting.update');

    // Locations
    Route::resource('provinces', ProvinceController::class);
    Route::resource('cities', CityController::class);
    Route::resource('neighbourhoods', NeighbourhoodController::class);
});

require __DIR__.'/auth.php';
