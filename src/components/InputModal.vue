<template>
  <ion-modal :is-open="isOpen" @ionModalDidDismiss="handleClose">
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ editingId ? 'Edit Race' : 'Add Race' }}</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="handleClose">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label position="floating">Race Name</ion-label>
          <ion-input v-model="localRace.name" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Description</ion-label>
          <ion-textarea v-model="localRace.description" rows="4" required></ion-textarea>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Track Details</ion-label>
          <ion-input v-model="localRace.trackDetails" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Scheduled Date</ion-label>
          <ion-datetime
            v-model="localRace.scheduledAt"
            display-format="YYYY-MM-DDTHH:mm"
            required
          ></ion-datetime>
        </ion-item>
      </ion-list>
    </ion-content>

    <ion-footer>
      <ion-toolbar>
        <ion-buttons slot="end">
          <ion-button @click="handleSubmit">
            {{ editingId ? 'Update Race' : 'Add Race' }}
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
  </ion-modal>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue';
import { Timestamp } from 'firebase/firestore';
import { Race, firestoreService } from '@/utils/firestore';

const props = defineProps<{
  isOpen: boolean;
  editingId: string | null;
  race: Partial<Race>;
}>();

const emit = defineEmits(['update:isOpen', 'update:editingId', 'submit']);

const localRace = ref<Partial<Race>>({
  name: '',
  description: '',
  trackDetails: '',
});

// Sync props to localRace
watch(
  () => props.race,
  (newValue) => {
    localRace.value = { ...newValue };
  },
  { immediate: true }
);

const handleClose = () => {
  emit('update:isOpen', false);
  emit('update:editingId', null);
};

const handleSubmit = async () => {
  if (!localRace.value.name || !localRace.value.description || !localRace.value.trackDetails || !localRace.value.scheduledAt) {
    alert('Please fill in all fields');
    return;
  }

  
};
</script>

<style scoped>
ion-modal {
  --height: 70%;
  --min-height: 50%;
}
</style>