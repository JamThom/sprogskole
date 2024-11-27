import { defineConfig, createSystem } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
})

export default createSystem(config)