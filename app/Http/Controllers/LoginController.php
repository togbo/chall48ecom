<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    //
    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        Auth::login($user); 
        if (Auth::check() && Auth::user()->role_id) {
            // L'utilisateur est un administrateur
            return redirect()->route('dashboard');
        }
        else{
            return redirect()->route('welcome');
        }
    }
   
}




