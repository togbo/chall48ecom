
@extends('layouts.user_type.auth')
@section('content')

<button type="button" class="btn btn-default" onclick="window.location.href='{{route('products.create')}}';">Add product</button>
<div class="container-fluid py-4">
    <div class="row">
    
        
        <div class="row">
            @foreach($products as $key => $product)
                <div class="col-md-4">
                    <div class="card">
                        <img src="{{ asset('images/' . $product->image) }}" alt="Image of {{ $product->name }}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">{{ $product->name }}</h5>
                            <p class="card-text">{{ $product->description }}</p>
                            <p class="card-text">{{ $product->price }}</p>
                            <a href="{{ route('products.show', $product->id) }}" class="btn btn-primary">Show</a>
                            <a href="{{ route('products.edit', $product->id) }}" class="btn btn-warning">Edit</a>
                            <form action="{{ route('products.destroy', $product->id) }}" method="POST" style="display: inline">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger">Delete</button>
                            </form>
                        </div>
                    </div>
                </div>
                @if(($key + 1) % 3 == 0)
                    </div>
                    <div class="row">
                @endif
            @endforeach
        </div>
       
        
        
        

    </div>
</div>
@endsection

