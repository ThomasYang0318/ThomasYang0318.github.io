# Project Images

Place project images in the folder matching the project's primary discipline:

- `software/` — applications, services, blockchain, and AI software
- `embedded/` — hardware, sensors, wearables, and embedded systems
- `visual/` — rendering, image processing, computer vision, and multimedia

Recommended filenames use lowercase words separated by hyphens, for example `nebula-market-cover.jpg`.

After adding an image, register its path in `data/projects.js`. Images listed in a featured project's `images` array automatically become carousel slides on both the homepage and project detail page.

## Stock Assistant and Two Dices sources

These PNGs are unchanged page previews downloaded from the user's original Canva presentations on 2026-10-08. The available previews are 596 × 335 pixels; retain the source links for future higher-resolution replacements.

- `software/stock-assistant/`: [Stock Assistant presentation](https://www.canva.com/design/DAHJal35urI/cHA8_1RakRQDC7WVqzHfXw/view). `line-comparison-demo.png` is page 6, `trend-query-demo.png` is page 7, `query-workflow.png` is page 8, and `chart-output.png` is page 11.
- `embedded/two-dices/`: [Two Dices presentation](https://www.canva.com/design/DAHJarXtIbw/EyQHEQyKoJ0cc53qU5ZDcA/view). `final-comparison-circuit.png` is page 33, `johnson-breadboard.png` is page 22, `johnson-circuit-overview.png` is page 7, and `555-circuit-simulation.png` is page 24.

## Mini Photoshop source

`visual/mini-photoshop/` contains comparison figures rendered directly from the user-provided `Multimedia Tools and Applications HW1_411285003.pdf` on 2026-10-08. The PDF calls the project "Tiny Photoshop"; the website retains its existing "Mini Photoshop" title. Captures preserve the original application screenshots and figure labels, excluding surrounding report text.

- `resize-comparison.jpg`: page 2.
- `contrast-comparison.jpg`: page 3.
- `grayscale-comparison.jpg`: page 4.
- `negative-comparison.jpg`: page 5.
- `gaussian-comparison.jpg`: page 9.
- `bilateral-comparison.jpg`: page 13.
- `sobel-comparison.jpg`: page 15; also used as the homepage cover.

The algorithm and performance descriptions come from pages 1–15. Gaussian speedups are reported experimental results, not universal performance guarantees.

## Sign Language Recognition source

`visual/sign-language/` contains unchanged 596 × 335 page previews from the user's [Sign Language Recognition presentation](https://www.canva.com/design/DAHJatEpzWk/nstlMZrI2ZfZJ_c39smrTg/view), downloaded on 2026-10-08.

- `validation-94.png`: page 15; 94.00% validation accuracy after 10 epochs and 180 iterations.
- `initial-training.png`: page 7; 2.86% validation accuracy after 4 epochs.
- `data-augmentation.png`: page 9; rotation and reflection settings.
- `training-20-epochs.png`: page 11; 93.14% validation accuracy, with an overfitting concern noted by the presenter.
- `gesture-reference.png`: page 17; gesture reference chart and MATLAB code.

`prediction-result.png` is the unchanged user-provided `履歷 的複本.png`, added on 2026-10-08 as the homepage cover and sole gallery image. It shows a hand gesture with the model output label 0. The training previews listed above are retained as source assets but are no longer displayed on the site.

Image display is capped at natural size in project galleries, with scale-down fitting for contained homepage images. The 596 x 335 Canva previews and 150 x 151 prediction image need higher-resolution originals for larger, sharper presentation; CSS does not restore missing detail.

## Nebula Market sources

The project copy and team contributions follow the user's [Nebula Market presentation](https://www.canva.com/design/DAGmQcP8vx0/yKB8-b4BMJb_f-6iVBpoAA/view), read on 2026-10-08. It documents a three-person 2025 course project, Flutter/Dart and web3dart integration with local Hardhat contracts, and application and purchase-test demos.

`software/nebula/` contains byte-for-byte copies of the four user-provided PNGs:

- `navigation.png`: `履歷 的複本 (1).png`, 83 x 203.
- `app-registration.png`: `履歷 的複本 (2).png`, 258 x 203; homepage cover.
- `my-purchases.png`: `履歷 的複本 (3).png`, 258 x 203.
- `logo.png`: `履歷 的複本 (4).png`, 75 x 37.

These files are small originals, not high-resolution replacements. Keep their natural display size to avoid upscaling.