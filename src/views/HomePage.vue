<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Radiator Springs Speedway</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item-sliding v-for="race in races" :key="race.id">
          <ion-item>
            <ion-card>
              <ion-card-header>
                <ion-card-title>{{ race.namaBalapan }}</ion-card-title>
                <ion-card-subtitle>{{ race.deskripsi }}</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                <p>Jadwal: {{ race.jadwal }}</p>
                <p>Lintasan: {{ race.lintasan }}</p>
              </ion-card-content>
            </ion-card>
          </ion-item>
          <ion-item-options>
            <ion-item-option color="danger" @click="deleteRace(race.id)">
              <ion-icon slot="icon-only" :icon="trash"></ion-icon>
            </ion-item-option>
            <ion-item-option color="primary" @click="editRace(race)">
              <ion-icon slot="icon-only" :icon="create"></ion-icon>
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="isOpen = true">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      <InputModal
        v-model:isOpen="isOpen"
        v-model:editingId="editingId"
        :race="race"
        @submit="handleSubmit"
      />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { firestoreService, Race } from "@/utils/firestore";

const races = ref<Race[]>([]);
const isOpen = ref(false);
const editingId = ref<string | null>(null);
const race = ref<Omit<Race, "id" | "createdAt" | "updatedAt">>({
  namaBalapan: "",
  deskripsi: "",
  jadwal: "",
  lintasan: "",
});

const loadRaces = async () => {
  races.value = await firestoreService.getRaces();
};

const handleSubmit = async (newRace: Omit<Race, "id" | "createdAt" | "updatedAt">) => {
  if (editingId.value) {
    await firestoreService.updateRace(editingId.value, newRace);
  } else {
    await firestoreService.addRace(newRace);
  }
  editingId.value = null;
  isOpen.value = false;
  loadRaces();
};

const editRace = (editData: Race) => {
  editingId.value = editData.id!;
  race.value = { ...editData };
  isOpen.value = true;
};

const deleteRace = async (id: string) => {
  await firestoreService.deleteRace(id);
  loadRaces();
};

onMounted(loadRaces);
</script>