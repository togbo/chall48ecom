<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class SessionsController extends Controller
{
    public function create()
    {
        return view('session.login-session');
    }

    public function store()
    {
        $attributes = request()->validate([
            'email'=>'required|email',
            'password'=>'required' 
        ]);

        if(Auth::attempt($attributes))
        {/**to do gestion utilisateur */
            if (Auth::check() && Auth::user()->role_id) {
            // L'utilisateur est un administrateur 
            return redirect()->route('dashboard');}else{
          
            return redirect()->route('/');

            session()->regenerate();
            return redirect('/')->with(['success'=>'You are logged in.']);
        }
        
        // L'utilisateur n'est pas un administrateur
        
        }
        

            return back()->withErrors(['email'=>'Email or password invalid.']);
        
    }
    
    public function destroy()
    {

        Auth::logout();

        return redirect('/login')->with(['success'=>'You\'ve been logged out.']);
    }
}
