<template>
  <button @click="send">Send email</button>
</template>

<script setup>
const { $mail } = useNuxtApp()
const send = () => $mail.send({
  from: 'John Doe',
  to: 'foo@bar.de',
  subject: 'Incredible',
  text: 'This is an incredible test message',
})
</script>
