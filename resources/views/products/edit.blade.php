
@extends('layouts.user_type.auth')
@section('content')


<form action="{{ route('products.update', $product->id) }}" method="POST" enctype="multipart/form-data">
    @csrf
    @method('PUT')
    <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" class="form-control" name="name" value="{{ $product->name }}" required />
    </div>
    <div class="form-group">
        <label for="description">Description:</label>
        <textarea name="description" class="form-control" required>{{ $product->description }}</textarea>
    </div>
    <div class="form-group">
        <label for="price">Price:</label>
        <input type="number" class="form-control" name="price" value="{{ $product->price }}" step="0.01" required />
    </div>
    <div class="form-group">
        <label for="image">Image:</label>
        <img src="{{ asset('images/'.$product->image) }}" width="50">
        <input type="file" class="form-control" name="image" />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</div>
@endsection