<template>
  <div class="not-found">
    <div class="content">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f9fa;
  color: #343a40;
  font-family: 'Arial', sans-serif;
}

.content {
  max-width: 600px;
  padding: 20px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 8rem;
  margin: 0;
}

p {
  font-size: 1.25rem;
  margin: 1rem 0;
}

.home-link {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.home-link:hover {
  background-color: #0056b3;
}
</style>
