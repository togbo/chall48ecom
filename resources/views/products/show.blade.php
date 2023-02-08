
@extends('layouts.user_type.auth')


@section('content')
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ $product->name }}</h1>
        <p><img src="{{ asset('images/' . $product->image) }} " ></p>
        <p>{{ $product->description }}</p>
        <p>Prix: {{ $product->price }}</p>
      </div>
    </div>
  </div>
@endsection
