 <template>
  <nav class="nav" aria-label="Main Menu">
    <ul>
      <li>
        <router-link class="nav-route" to="/cv">
          <span class="nav-icon" tabindex="1">CV</span>
        </router-link>
      </li>
      <li>
        <router-link class="nav-route" to="/art">
          <span class="nav-icon" tabindex="2">Art</span>
        </router-link>
      </li>
      <li>
        <router-link class="nav-route" to="/contact">
          <span class="nav-icon desktop" tabindex="3">Contact</span>
          <span class="nav-icon mobile" tabindex="3">@</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>