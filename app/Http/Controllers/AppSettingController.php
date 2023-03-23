<?php

namespace App\Http\Controllers;

use App\Http\Requests\AppSettingRequest;
use App\Models\AppSetting;
use Illuminate\Http\Request;

class AppSettingController extends Controller
{
    public function index()
    {
        return inertia('AppSetting/Index');
    }

    public function update(AppSettingRequest $request)
    {
        AppSetting::where('id', 1)->update([
            'app_name' => $request->app_name,
        ]);

        flashMessage('Setting updated successfully!', 'success');
        return back();
    }
}
