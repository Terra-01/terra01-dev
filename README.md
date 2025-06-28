# terra01.dev - My Portfolio Website

This repository contains the source code for my personal portfolio website, which you can view live at [terra01-dev](https://github.com/Terra-01/terra01-dev). 

I built this project as a customizable, developer-focused portfolio template using Next.js and Markdown. The goal was to create a site that is easy to maintain by simply editing text files, with no coding required for content updates.

## Using This Template

Feel free to fork this repository and use it to build your own portfolio. To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later)
- An account with [Formspree](https://formspree.io/) for the contact form.

### Installation & Setup

1.  **Clone the template repo:**
    ```sh
    git clone https://github.com/Terra-01/dev-portfolio-template.git
    ```
2.  **Install dependencies:**
    ```sh
    npm install
    ```
3.  **Customize your content:**
    Open `src/app/page.tsx` and replace the Name, Title & Tagline.
    Edit the Markdown files in the `src/content/` directory to add your personal information:
    - `about.md`
    - `experience.md`
    - `education.md`
    - `projects.md`
    - `skills.md`
    Open `src/components/DownloadCV.tsx` and replace the download pdf name with your name.

4.  **Update the contact form and set theme:**
    Open `src/components/ContactModal.tsx` and replace the placeholder URL with your own Formspree endpoint.
     Open `src/components/ThemeProvider.tsx` and change the default theme (preference).

5.  **Run the development server:**
    ```sh
    npm run dev
    ```

Your new portfolio will be available at [http://localhost:3000](http://localhost:3000).

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Content:** [Markdown](https://www.markdownguide.org/) with [gray-matter](https://github.com/jonschlinkert/gray-matter) and [remark](https://remark.js.org/)
- **Contact Form:** [Formspree](https://formspree.io/)

## License

The code for this template is distributed under the MIT License. See `LICENSE` for more information. You are free to use, modify, and distribute it.