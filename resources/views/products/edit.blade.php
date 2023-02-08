<script src="../assets/js/core/popper.min.js"></script>
  <script src="../assets/js/core/bootstrap.min.js"></script>
  <script src="../assets/js/plugins/perfect-scrollbar.min.js"></script>
  <script src="../assets/js/plugins/smooth-scrollbar.min.js"></script>
  <script src="../assets/js/plugins/fullcalendar.min.js"></script>
  <script src="../assets/js/plugins/chartjs.min.js"></script>
  <link href="../assets/css/nucleo-icons.css" rel="stylesheet" />
  <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />
  <script src="../assets/js/soft-ui-dashboard.min.js?v=1.0.3"></script>
@extends('layouts.user_type.auth')
@section('content')


<div class="container-fluid py-4">
    <div class="row">
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