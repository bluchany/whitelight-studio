---
description: How to add a new album to the Works page
---

# Adding a New Album to the Works Page

When the user asks you to add a new album or work to the `WORKS` page, follow this exact workflow to ensure maximum quality and consistency with the rest of the site. The user will typically provide an uploaded image, album title, artist name, release date, YouTube link, description, and credits in the chat.

1. **Locate and Save the Image**
   - Find the uploaded image path using the `ls` command in the artifacts folder.
   - Use the `cp` command to copy the uploaded image to `public/images/[image_name_provided_by_user].jpg`. (Or `.png` depending on the original).

2. **Create the Detail Page (`src/app/works/[id]/page.tsx`)**
   - Analyze the provided information.
   - You MUST create a new detail page component inside `src/app/works/[new-id-name]/page.tsx`.
   - **Template rules to follow:**
     - The background must be completely clean white (`bg-white relative min-h-screen text-black font-sans`).
     - **Title Area**: The artist name h2 must be uppercase text `#222`, and immediately BELOW it, there must be a smaller centered instagram link: `<a href="https://instagram.com/아이디" target="_blank" rel="noopener noreferrer" className="mt-2 text-xs md:text-sm font-bold text-neutral-400 hover:text-neutral-800 transition-colors tracking-widest">@아이디</a>`.
     - **Album Title**: Remove any square brackets `[` `]` from the album title. Display it as a large heading.
     - **Cover Image Hover Effect**: The album artwork must be wrapped in an `<a>` tag with the provided YouTube link, using `target="_blank"`. Inside the `<a>` tag, the image must have the JYP-style hover overlay: `<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">... (vertical/horizontal white lines) ...</div>`.
     - **Release Date Section**: Add a subtle text block showing "Release Date" and the date formatted as `YYYY. MM. DD.`.
     - **Description**: Add the provided description below a vertical divider line. Use `break-keep` and format nicely.
     - **Credits Section**: Below another divider, list all credits in a grid (`grid-cols-2 md:grid-cols-3`).
     - **Instagram Links in Credits**: ANY Instagram handle (e.g., `@shcord_re`, `@wl_musicstudio`) mentioned in the credits MUST be wrapped in an `<a>` tag pointing to `https://instagram.com/[handle]` with `hover:text-neutral-500 transition-colors`.

3. **Update the Works Index (`src/app/works/page.tsx`)**
   - Locate the `ALBUMS` array array inside `src/app/works/page.tsx`.
   - Add a new object to this array with properties:
     - `id`: The URL path name you created (e.g., `"haze"` or `"never-forgot-you"`).
     - `title`: The album title (without square brackets).
     - `artist`: The artist name (without instagram tags).
     - `date`: The release date formatted exactly as `"YYYY. MM. DD."` (e.g., `"2023. 10. 06."`).
     - `image`: The path to the newly saved image in `public/images/`.
     - `link`: The path to the detail page (e.g., `"/works/haze"`).
   - *Note: The frontend code automatically sorts the `ALBUMS` array by this `date` field, so your exact formatting matters for the chronological display.*

4. **Review and Notify**
   - Verify that the image is in place, the detail page has the correct styling, and the index page points to it.
   - Use `notify_user` to provide a summary of the additions.
