import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBlogStore = defineStore('blogs', () => {
  const blogs = ref([])
  const isLoading = ref(false)
  const error = ref(null)


  // ACTIONS
  const fetchBlogs = async() => {
    if(blogs.value.length) return
    isLoading.value = true
    try {
      const res = await fetch('https://dev.to/api/articles?per_page=12?top=week')
      if(!res.ok) throw new Error('Failed to fetch blogs')
      blogs.value =  await res.json()
    }catch (e) {
      error.value = e.message
    }finally {
      isLoading.value = false
    }
  }

  const fetchBlogById = async(id) => {
      isLoading.value = true;
      try {
        const res = await fetch(`https://dev.to/api/articles/${id}`);
        return await res.json();
      }catch (e) {
        error.value = e.message
      }finally {
        isLoading.value = false;
      }
  }

  return {
    blogs,
    isLoading,
    error,
    fetchBlogs,
    fetchBlogById
  }
})
