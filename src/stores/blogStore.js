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
      const res = await fetch('https://dev.to/api/articles?top=6?tags=javascript, css, html')
      if(!res.ok) throw new Error('Failed to fetch blogs')
      blogs.value =  await res.json()
    }catch (e) {
      error.value = e.message
    }finally {
      isLoading.value = false
    }
  }

  return {
    blogs,
    isLoading,
    error,
    fetchBlogs
  }
})
