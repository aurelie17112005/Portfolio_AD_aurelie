<template>
  <section id="missions" class="py-6">
    <h2 class="text-h5 mb-3">Missions & livrables</h2>
    <v-card class="pa-2" rounded="xl">
      <v-table density="comfortable">
        <thead>
          <tr>
            <th class="text-left">Mission</th>
            <th class="text-left">Activités clés</th>
            <th class="text-left">Livrables</th>
            <th class="text-left">Résultat</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="m in data.missions" :key="m.id">
            <td class="font-weight-medium">{{ m.id }} — {{ m.titre }}</td>
            <td>• {{ m.activites.join(' • ') }}</td>
            <td>• {{ m.livrables.join(' • ') }}</td>
            <td>✓ {{ m.resultat }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </section>
</template>

<script setup>
import data from '../content/portfolio.js'
</script>
