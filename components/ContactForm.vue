<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import type { ContactPageContent, TourCard } from '~/types/content'
import { siteConfig } from '~/config/site'

const props = defineProps<{ copy: ContactPageContent['form']; tours: TourCard[] }>()

const config = useRuntimeConfig()
const endpoint = computed(() => (config.public.contactEndpoint as string) || '')

const form = reactive({
  name: '',
  email: '',
  phone: '',
  people: '',
  date: '',
  tour: '',
  message: '',
  consent: false
})

const errors = reactive<Record<string, string>>({})
const status = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate() {
  Object.keys(errors).forEach((k) => delete errors[k])
  if (!form.name.trim()) errors.name = props.copy.required
  if (!form.email.trim()) errors.email = props.copy.required
  else if (!emailRe.test(form.email)) errors.email = props.copy.invalidEmail
  if (!form.message.trim()) errors.message = props.copy.required
  if (!form.consent) errors.consent = props.copy.required
  return Object.keys(errors).length === 0
}

/** Fallback: if there's no backend but a business email exists, offer mailto. */
const mailtoHref = computed(() => {
  if (!siteConfig.contact.email) return ''
  const body = [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone}`,
    `People: ${form.people}`,
    `Preferred date: ${form.date}`,
    `Tour: ${form.tour}`,
    '',
    form.message
  ].join('\n')
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent('Rafting enquiry')}&body=${encodeURIComponent(body)}`
})

async function onSubmit() {
  if (!validate()) return

  // No backend configured → graceful, no invented API.
  if (!endpoint.value) {
    status.value = 'success'
    return
  }

  status.value = 'submitting'
  try {
    await $fetch(endpoint.value, { method: 'POST', body: { ...form } })
    status.value = 'success'
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <div class="form-card">
    <h2 class="form-card__title">{{ copy.heading }}</h2>

    <div v-if="!endpoint" class="form-note" role="note">
      <UiAppIcon name="signal" :size="18" />
      <span>{{ copy.disabledNotice }}</span>
    </div>

    <form v-if="status !== 'success'" class="form" novalidate @submit.prevent="onSubmit">
      <div class="form__row">
        <div class="field">
          <label for="cf-name">{{ copy.name }} *</label>
          <input id="cf-name" v-model="form.name" type="text" autocomplete="name"
            :aria-invalid="!!errors.name" :class="{ 'is-error': errors.name }" />
          <span v-if="errors.name" class="field__error">{{ errors.name }}</span>
        </div>
        <div class="field">
          <label for="cf-email">{{ copy.email }} *</label>
          <input id="cf-email" v-model="form.email" type="email" autocomplete="email"
            :aria-invalid="!!errors.email" :class="{ 'is-error': errors.email }" />
          <span v-if="errors.email" class="field__error">{{ errors.email }}</span>
        </div>
      </div>

      <div class="form__row">
        <div class="field">
          <label for="cf-phone">{{ copy.phone }}</label>
          <input id="cf-phone" v-model="form.phone" type="tel" autocomplete="tel" />
        </div>
        <div class="field">
          <label for="cf-people">{{ copy.people }}</label>
          <input id="cf-people" v-model="form.people" type="number" min="1" inputmode="numeric" />
        </div>
      </div>

      <div class="form__row">
        <div class="field">
          <label for="cf-date">{{ copy.date }}</label>
          <input id="cf-date" v-model="form.date" type="date" />
        </div>
        <div class="field">
          <label for="cf-tour">{{ copy.tour }}</label>
          <select id="cf-tour" v-model="form.tour">
            <option value="">{{ copy.tourPlaceholder }}</option>
            <option v-for="tourItem in tours" :key="tourItem.id" :value="tourItem.name">{{ tourItem.name }}</option>
          </select>
        </div>
      </div>

      <div class="field">
        <label for="cf-message">{{ copy.message }} *</label>
        <textarea id="cf-message" v-model="form.message" rows="5" :placeholder="copy.messagePlaceholder"
          :aria-invalid="!!errors.message" :class="{ 'is-error': errors.message }" />
        <span v-if="errors.message" class="field__error">{{ errors.message }}</span>
      </div>

      <label class="consent" :class="{ 'is-error': errors.consent }">
        <input v-model="form.consent" type="checkbox" />
        <span>{{ copy.consent }}</span>
      </label>

      <p v-if="status === 'error'" class="form__status form__status--error">{{ copy.errorText }}</p>

      <button type="submit" class="btn btn--lg btn--block" :disabled="status === 'submitting'">
        {{ copy.submit }}
      </button>
    </form>

    <div v-else class="form-success" role="status">
      <span class="form-success__icon"><UiAppIcon name="check" :size="30" /></span>
      <h3>{{ copy.successTitle }}</h3>
      <p>{{ copy.successText }}</p>
      <a v-if="!endpoint && mailtoHref" :href="mailtoHref" class="btn btn--river">{{ copy.submit }}</a>
    </div>
  </div>
</template>

<style scoped>
.form-card {
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: clamp(1.5rem, 4vw, 2.5rem);
}
.form-card__title { font-size: var(--fs-h3); margin-bottom: 1.25rem; }
.form-note {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  padding: 0.85rem 1rem;
  margin-bottom: 1.5rem;
  background: var(--accent-100);
  border-radius: var(--radius);
  font-size: 0.9rem;
  color: #7a3416;
}
.form-note svg { flex: none; margin-top: 2px; color: var(--accent-600); }

.form { display: flex; flex-direction: column; gap: 1.1rem; }
.form__row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.1rem; }
.field { display: flex; flex-direction: column; gap: 0.4rem; }
.field label { font-weight: 600; font-size: 0.9rem; }
.field input,
.field select,
.field textarea {
  width: 100%;
  padding: 0.8rem 0.9rem;
  border: 1.5px solid var(--line);
  border-radius: var(--radius);
  background: var(--mist);
  transition: border-color 0.2s var(--ease), background 0.2s var(--ease), box-shadow 0.2s var(--ease);
}
.field input:focus,
.field select:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--river);
  background: #fff;
  box-shadow: 0 0 0 3px rgba(14, 124, 134, 0.14);
}
.field textarea { resize: vertical; }
.field .is-error { border-color: #d64545; background: #fef4f4; }
.field__error { color: #c0392b; font-size: 0.82rem; }

.consent { display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.9rem; color: var(--text-muted); }
.consent input { margin-top: 3px; width: 18px; height: 18px; accent-color: var(--river); flex: none; }
.consent.is-error span { color: #c0392b; }

.form__status--error { color: #c0392b; font-size: 0.9rem; }

.form-success { text-align: center; padding: 1.5rem 0; }
.form-success__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 68px; height: 68px;
  border-radius: 50%;
  color: #fff;
  background: linear-gradient(135deg, var(--river), var(--deep));
  margin-bottom: 1rem;
}
.form-success h3 { font-size: var(--fs-h3); }
.form-success p { margin-top: 0.5rem; color: var(--text-muted); }
.form-success .btn { margin-top: 1.25rem; }

@media (max-width: 560px) {
  .form__row { grid-template-columns: 1fr; }
}
</style>
