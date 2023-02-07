
@extends('layouts.user_type.auth')
@section('content')


<div class="container-fluid py-4">
    <div class="row">
<form action="{{url('/products/stored') }}" method="POST" enctype="multipart/form-data">
    @csrf
    <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" class="form-control" name="name" required />
    </div>
    <div class="form-group">
    <label for="description">Description:</label>
    <textarea name="description" class="form-control" required></textarea>
    </div>
    <div class="form-group">
    <label for="price">Price:</label>
    <input type="number" class="form-control" name="price" step="0.01" required />
    </div>
    <div class="form-group">
    <label for="image">Image:</label>
    <input type="file" class="form-control" name="image" required />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    
    </form>
</div>
</div>
@endsection