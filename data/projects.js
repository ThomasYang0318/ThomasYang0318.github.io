// Edit this file to add projects, change copy, or add carousel images.
// Image paths are relative to the website root. The renderer adjusts them for
// pages inside /projects automatically.

export const projectTracks = [
  {
    id: 'software',
    index: '01',
    name: 'Software Engineering',
    description: 'Product-focused applications, connected services, and software systems built around real user flows.',
    featured: {
      id: 'mijing',
      title: 'Mijing — Deep Travel Discovery',
      href: 'projects/project.html?id=mijing&v=20260827-8',
      meta: 'UI/UX Design · Product Planning · Travel Discovery',
      description: 'A story-led map experience for recording moods and discovering the memories attached to places.',
      tags: ['UI/UX Design', 'Product Planning', 'Flutter', 'Maps'],
      linkLabel: 'Read project',
      mediaClass: 'presentation-media',
      details: [
        'Mijing is a travel-discovery concept that turns a map into a record of human experience. Instead of showing only where a place is, it helps people understand what happened there and why that place mattered to someone.',
        'The product is shaped around two ideas: “Record Mood” lets people attach feelings and memories to a visit, while “Find a Story in the Place” helps the next visitor discover those experiences through the map or swipeable recommendation cards.',
        'My role covered UI/UX design and product planning. I organized the product into personal, friend, and community layers, then designed how people post, revisit places, browse profiles, follow recommendations, and continue exploring.'
      ],
      overviewFacts: [
        { label: 'Core problem', value: 'Travel tools show destinations, but rarely preserve the emotion and story behind a visit.' },
        { label: 'Product model', value: 'A social map with personal, friend, and community layers—plus swipe-based discovery.' },
        { label: 'My role', value: 'UI/UX Design and Product Planning.' }
      ],
      links: [
        { label: 'View presentation ↗', url: 'https://canva.link/z82jjk7alag1ze0' }
      ],
      videos: [
        {
          title: 'Mijing introduction',
          youtubeId: 'zAio6N_cqA4',
          autoplay: true,
          muted: true
        }
      ],
      images: [
        {
          src: 'assets/images/projects/software/mijing/story/discovery-paths.jpg',
          alt: 'Mijing product overview showing its map-based and swipe-card discovery experiences'
        },
        {
          src: 'assets/images/projects/software/mijing/story/audience-model.jpg',
          alt: 'Mijing personal, friend, and community map modes'
        },
        {
          src: 'assets/images/projects/software/mijing/story/swipe-card-flow.jpg',
          alt: 'Mijing swipe-card interface for discovering place-based stories'
        }
      ],
      caseStudy: {
        title: 'How Mijing works',
        intro: 'Follow the product from its core idea to the three social map layers and the final swipe-based discovery flow.',
        chapters: [
          {
            id: 'concept',
            index: '01',
            label: 'Product concept',
            title: 'From finding a place to understanding why it matters.',
            description: 'Mijing treats every destination as a container for emotion, memory, and story. The experience starts with two complementary ways to explore and three levels of social distance.',
            images: [
              { src: 'assets/images/projects/software/mijing/story/concept-record-mood.jpg', alt: 'Mijing core concept beside the map interface', eyebrow: 'Core promise', title: 'Record Mood. Find a Story in the Place.', description: 'The concept connects a physical location with the feeling and personal story attached to it.', wide: true },
              { src: 'assets/images/projects/software/mijing/story/discovery-paths.jpg', alt: 'Mijing map-based and swipe-card discovery paths', eyebrow: 'Discovery model', title: 'Two ways to start exploring', description: 'Use the map when location matters, or swipe through story cards when inspiration comes first.' },
              {
                src: 'assets/images/projects/software/mijing/story/audience-model.jpg',
                alt: 'Mijing personal friend and community audience model',
                eyebrow: 'Interactive social model',
                title: 'Choose a layer to see how it works',
                description: 'Personal, friend, and community views control whose memories and recommendations appear.',
                interactionHint: 'Select one of the three rows in the image to jump to its feature walkthrough.',
                wide: true,
                hotspots: [
                  { label: 'Person', target: 'mijing-story-personal', x: 38.5, y: 28.5, width: 45, height: 14.5, description: 'Open the personal layer walkthrough' },
                  { label: 'Friend', target: 'mijing-story-friend', x: 38.5, y: 47.5, width: 45, height: 14.5, description: 'Open the friend layer walkthrough' },
                  { label: 'Community', target: 'mijing-story-community', x: 38.5, y: 66.5, width: 45, height: 14.5, description: 'Open the community layer walkthrough' }
                ]
              }
            ]
          },
          {
            id: 'personal',
            index: '02',
            label: 'Personal layer',
            title: 'Turn visits into a personal memory map.',
            description: 'The personal layer is the starting point: people can see where they have been, add a new place-based story, and return to their own history through the profile.',
            images: [
              { src: 'assets/images/projects/software/mijing/story/personal-entry.jpg', alt: 'Mijing entry into the personal map layer', eyebrow: 'Layer switcher', title: 'Enter the personal view', description: 'The bottom navigation keeps personal, friend, and community contexts visible at all times.' },
              { src: 'assets/images/projects/software/mijing/story/personal-mode.jpg', alt: 'Mijing personal map mode highlighted', eyebrow: 'Personal map', title: 'See your own travel footprint', description: 'Visited locations become a visual history rather than a disconnected list.' },
              { src: 'assets/images/projects/software/mijing/story/personal-map-anatomy.jpg', alt: 'Annotated Mijing personal map interface', eyebrow: 'Interface anatomy', title: 'One map, three primary actions', description: 'Post, Profile, and Visited Place form the main personal loop.', wide: true },
              { src: 'assets/images/projects/software/mijing/story/personal-post-entry.jpg', alt: 'Mijing post action highlighted on the personal map', eyebrow: 'Post entry', title: 'Start a story from the map', description: 'The post action begins with location, keeping every memory anchored to a real place.' },
              { src: 'assets/images/projects/software/mijing/story/post-creation-flow.jpg', alt: 'Mijing multi-step post creation flow', eyebrow: 'Post flow', title: 'Attach mood and context', description: 'The creation flow captures the place, content, and settings needed to share a meaningful visit.' },
              { src: 'assets/images/projects/software/mijing/story/personal-profile-entry.jpg', alt: 'Mijing profile action highlighted on the personal map', eyebrow: 'Profile entry', title: 'Move from map to personal history', description: 'The profile provides a second path into the places and stories a person has recorded.' },
              { src: 'assets/images/projects/software/mijing/story/profile-flow.jpg', alt: 'Mijing profile and personal history screens', eyebrow: 'Profile flow', title: 'Review past stories and places', description: 'Personal content is organized so memories can be revisited after the trip.' }
            ]
          },
          {
            id: 'friend',
            index: '03',
            label: 'Friend layer',
            title: 'Discover places through people you already trust.',
            description: 'Friend mode expands the map beyond the individual. Familiar people become discovery signals, helping users understand who visited a place before opening its details.',
            images: [
              { src: 'assets/images/projects/software/mijing/story/friend-entry.jpg', alt: 'Mijing entry into the friend map layer', eyebrow: 'Layer switcher', title: 'Move into the friend layer', description: 'A clear mode change prevents personal records and friend activity from becoming mixed.' },
              { src: 'assets/images/projects/software/mijing/story/friend-avatars.jpg', alt: 'Friend avatars displayed on the Mijing map', eyebrow: 'Map signal', title: 'People become discovery cues', description: 'Friend avatars show where activity exists before the user opens a specific story.' },
              { src: 'assets/images/projects/software/mijing/story/friend-mode.jpg', alt: 'Mijing friend mode highlighted on the map', eyebrow: 'Friend map', title: 'Browse the network geographically', description: 'The map connects social context with physical distance and direction.' },
              { src: 'assets/images/projects/software/mijing/story/place-detail-flow.jpg', alt: 'Mijing transition from recommendation to place details', eyebrow: 'Place details', title: 'Turn a social cue into a destination', description: 'Selecting a place leads into practical details and the stories associated with it.' }
            ]
          },
          {
            id: 'community',
            index: '04',
            label: 'Community layer',
            title: 'Look beyond the familiar and find an unexpected story.',
            description: 'Community mode introduces broader discovery. It balances nearby place posts with random recommendations so exploration can remain relevant without becoming predictable.',
            images: [
              { src: 'assets/images/projects/software/mijing/story/community-entry.jpg', alt: 'Mijing entry into the community map layer', eyebrow: 'Layer switcher', title: 'Open the community view', description: 'The third map layer separates public discovery from personal and friend activity.' },
              { src: 'assets/images/projects/software/mijing/story/community-discovery.jpg', alt: 'Annotated Mijing community recommendation interface', eyebrow: 'Recommendation model', title: 'Nearby stories and unexpected suggestions', description: 'Specific-place posts provide context while random recommendations create serendipity.', wide: true },
              { src: 'assets/images/projects/software/mijing/story/community-mode.jpg', alt: 'Mijing community mode with random recommendation highlighted', eyebrow: 'Community map', title: 'Surface a story outside the network', description: 'Community content helps users encounter places they would not find through friends alone.' },
              { src: 'assets/images/projects/software/mijing/story/community-posts.jpg', alt: 'Mijing nearby community post list', eyebrow: 'Community posts', title: 'Continue from map to story list', description: 'A location-specific feed gives users a focused way to compare nearby experiences.' }
            ]
          },
          {
            id: 'swipe',
            index: '05',
            label: 'Swipe discovery',
            title: 'Keep exploration lightweight when the user has no destination yet.',
            description: 'Swipe cards provide a second entry point into Mijing. A person can react quickly to a place story, then move into deeper details only when something feels relevant.',
            images: [
              { src: 'assets/images/projects/software/mijing/story/swipe-card-flow.jpg', alt: 'Mijing swipe-card interaction with dislike and like states', eyebrow: 'Card interaction', title: 'Decide with a simple gesture', description: 'Swipe left to pass or right to save interest, reducing the effort required to keep exploring.', wide: true }
            ]
          }
        ]
      }
    },
    otherLabel: 'Other software projects',
    otherProjects: [
      {
        id: 'nebula',
        title: 'Nebula Market',
        type: 'Blockchain product',
        description: 'A marketplace for issuing, verifying, tracking, and transferring NFT-backed software licenses.',
        href: 'projects/nebula.html',
        linkLabel: 'Read project →',
        tags: ['Flutter', 'Web3', 'Smart Contract', 'NFT'],
        videos: [
          { title: 'Nebula Market demo', youtubeId: 'H5aj_MFhBm4' }
        ],
        image: {
          src: 'assets/images/project-placeholder-dog-en.jpg',
          alt: 'No image available for the Nebula Market project yet'
        }
      },
      {
        id: 'local-ai-chatbot',
        title: 'Local AI Chatbot',
        type: 'Local AI · Client–Server System',
        description: 'A Flutter mobile client that exchanges messages with a locally hosted Ollama model through a Python TCP server.',
        href: 'projects/project.html?id=local-ai-chatbot&v=20260827-12',
        linkLabel: 'Read project →',
        tags: ['Flutter', 'Dart', 'Python', 'TCP', 'Ollama'],
        details: [
          'Local AI Chatbot is a client–server prototype that lets an iPhone use a language model running on a nearby computer. The mobile interface is built with Flutter, while a Python TCP server acts as the bridge between the app and the local Ollama runtime.',
          'When the user submits a message, the Flutter client sends the text through a TCP connection. The server receives the request, passes it to Ollama for inference, waits for the generated result, and sends the completed response back to the phone for display in the chat interface.',
          'The current interaction follows a simple turn-based pattern: one user message produces one complete model response. This keeps the prototype easy to understand and makes each step of the communication path visible—from user input and network transfer to local inference and response delivery.',
          'Running the model on the host computer reduces dependence on a cloud AI API and gives the system owner more control over where inference happens. A production-ready version could add structured message framing, connection timeouts, reconnection handling, token streaming, and persistent conversation history.'
        ],
        overviewFacts: [
          { label: 'Mobile client', value: 'A Flutter chat interface running on an iPhone captures the prompt and displays the returned answer.' },
          { label: 'Transport', value: 'A TCP connection carries each request and response between the phone and a computer on the local network.' },
          { label: 'Server layer', value: 'A Python server coordinates the network connection and forwards prompts to the local model runtime.' },
          { label: 'Local inference', value: 'Ollama runs the language model on the host computer instead of sending the prompt to a cloud AI service.' },
          { label: 'Interaction model', value: 'One message is submitted at a time, and the interface waits for one complete response before the next turn.' }
        ],
        videos: [
          { title: 'Local AI chatbot demo', youtubeId: '4jLwm5LyvbU' }
        ],
        image: {
          src: 'assets/images/projects/software/local-ai-chatbot.png',
          alt: 'Local AI chatbot architecture connecting an iPhone client, TCP server, and Ollama',
          className: 'media-contain'
        }
      },
      {
        id: 'stock-assistant',
        title: 'Stock Assistant',
        type: 'AI application',
        description: 'A conversational stock assistant for asking about price trends, comparing stocks, and requesting charts directly in LINE.',
        href: 'projects/project.html?id=stock-assistant',
        linkLabel: 'Read project →',
        tags: ['LINE Bot', 'API Integration', 'Market Data', 'AI'],
        details: [
          'Looking up stock prices and analysis often means switching between different platforms. Stock Assistant brings these queries into a familiar LINE conversation, aiming to reduce the effort needed to find and understand stock information.',
          'The project combines a LINE Bot, a stock-data API, and an AI API in a conversational stock-analysis assistant. Users can ask stock-related questions in natural language instead of navigating separate tools.',
          'Queries include asking about a particular stock\'s recent price trend, comparing the performance of different stocks, and requesting a price-trend chart. The goal is to make stock-information lookup easier to access through chat.'
        ],
        overviewFacts: [
          { label: 'User problem', value: 'Stock-price and analysis queries require switching between multiple platforms.' },
          { label: 'Interaction', value: 'Natural-language questions sent directly through LINE.' },
          { label: 'Core queries', value: 'Recent price trends, stock-performance comparisons, and price-trend charts.' },
          { label: 'Service integration', value: 'LINE Bot, a stock-data API, and an AI API.' },
          { label: 'Planned independent rebuild', value: 'I plan to rebuild the project independently, with support for Taiwan and US stocks. This is a future development plan; the rebuild has not yet been implemented.' }
        ],
        links: [
          { label: 'View presentation ↗', url: 'https://canva.link/cksdxkj3eizbnmc' },
          { label: 'Watch demo on YouTube ↗', url: 'https://www.youtube.com/shorts/2ZCj3vfZZ0k' }
        ],
        videos: [
          { title: 'Stock Assistant — LINE Bot demo', youtubeId: '2ZCj3vfZZ0k', portrait: true }
        ],
        image: {
          src: 'assets/images/projects/software/stock-assistant/line-comparison-demo.png',
          alt: 'Stock Assistant presentation showing a LINE conversation comparing companies',
          className: 'media-contain'
        },
        images: [
          { src: 'assets/images/projects/software/stock-assistant/line-comparison-demo.png', alt: 'LINE chat demonstration of comparing multiple companies in Stock Assistant' },
          { src: 'assets/images/projects/software/stock-assistant/trend-query-demo.png', alt: 'LINE conversation requesting a 30-day stock trend chart' },
          { src: 'assets/images/projects/software/stock-assistant/query-workflow.png', alt: 'Stock Assistant workflow routing user input to chart generation, stock analysis, or a conversational reply' },
          { src: 'assets/images/projects/software/stock-assistant/chart-output.png', alt: 'Stock Assistant presentation showing a stock-price chart hosted in Cloudinary' }
        ]
      }
    ]
  },
  {
    id: 'embedded',
    index: '02',
    name: 'Embedded Systems & Hardware',
    description: 'Sensing hardware, edge platforms, and intelligent physical systems designed as complete products.',
    reverse: true,
    featured: {
      id: 'wearable',
      title: 'Smart Wearable Resistance Training System',
      href: 'projects/wearable.html',
      meta: 'Embedded AI · Wearable · Sensing',
      description: 'A wearable system combining IMU and optical sensing, edge intelligence, movement analysis, and real-time mobile feedback.',
      tags: ['IMU', 'CNN', 'Luckfox Pico Zero', 'Flutter'],
      linkLabel: 'Read project',
      videos: [
        { title: 'Smart wearable resistance training system demo', youtubeId: 'DJ7WR7n6QPM' }
      ],
      images: [
        {
          src: 'assets/images/projects/embedded/wearable-system-architecture.png',
          alt: 'Wearable sensing architecture connecting optical sensors and an IMU to a Luckfox Pico Zero and smartphone'
        }
      ]
    },
    otherLabel: 'Other hardware projects',
    shortGrid: true,
    otherProjects: [
      {
        id: 'two-dices',
        title: 'Two Dices',
        type: 'Digital logic',
        description: 'A digital-logic dice comparison game with seven-segment displays and indicator lights for greater than, equal to, or less than.',
        href: 'projects/project.html?id=two-dices',
        linkLabel: 'Read project →',
        tags: ['Digital Logic', 'CircuitJS1', '555 Timer', 'Seven-segment Display'],
        details: [
          'Two Dices is a three-person digital-logic project that compares two dice values. The circuit represents values on seven-segment displays and uses indicator lights to show whether the first value is greater than, equal to, or less than the second.',
          'The development workflow moved from logic design and CircuitJS1 simulation to a physical breadboard implementation. Simulation was used to check logic behavior and signal outputs before connecting the ICs, arranging the power supply, and testing the inputs and displays.',
          'The project explored two dice-generation approaches: a Johnson counter driven by a 555 timer, and three 555 timers operating at different frequencies. A DIP-switch input was also included as an alternative for setting dice values.',
          'My responsibilities were circuit design, breadboard wiring, and testing and debugging. The project gave me practical experience translating simulated digital logic into a working hardware circuit.'
        ],
        overviewFacts: [
          { label: 'Team & role', value: 'Three-person team. My work covered circuit design, breadboard wiring, and testing and debugging.' },
          { label: 'Simulation', value: 'CircuitJS1 was used to verify the logic design and signal outputs before hardware implementation.' },
          { label: 'Counter-based dice', value: 'A 555 timer supplies clock pulses to a 74HC4017 Johnson counter. A CD4532 priority encoder provides a three-bit representation, with logic gates handling invalid values 0 and 7 to keep the dice output within 1–6.' },
          { label: 'State & display', value: '4013 D-type flip-flops hold the binary state, while a 4511 BCD-to-seven-segment decoder drives the numeric display.' },
          { label: 'Alternative input', value: 'The second dice design explores three 555 timers with different resistor and capacitor values. DIP switches provide an alternative binary input for values 1–6.' },
          { label: 'Comparison', value: 'A 7485 magnitude comparator compares the two dice values. Indicator lights show which value is larger or whether they are equal.' },
          { label: 'Implementation challenges', value: 'The presentation documents difficulty tuning the 555 timer frequencies, along with clock stability, signal noise, power-supply stability, and complex breadboard wiring.' },
          { label: 'Proposed improvements', value: 'Tune timer frequency with a variable resistor, improve clock stability, add switch debouncing and noise reduction, and simplify the wiring layout. These are proposed follow-up improvements.' }
        ],
        links: [
          { label: 'View presentation ↗', url: 'https://www.canva.com/design/DAHJarXtIbw/EyQHEQyKoJ0cc53qU5ZDcA/view' }
        ],
        image: {
          src: 'assets/images/projects/embedded/two-dices/final-comparison-circuit.png',
          alt: 'Two Dices breadboard circuit with two seven-segment displays and comparison indicator lights',
          className: 'media-contain'
        },
        images: [
          { src: 'assets/images/projects/embedded/two-dices/final-comparison-circuit.png', alt: 'Final Two Dices breadboard and indicator lights for greater than, equal to, and less than' },
          { src: 'assets/images/projects/embedded/two-dices/johnson-breadboard.png', alt: 'Johnson-counter dice prototype wired on a breadboard with a seven-segment display' },
          { src: 'assets/images/projects/embedded/two-dices/johnson-circuit-overview.png', alt: 'Annotated Johnson-counter dice circuit showing encoding, valid-value logic, flip-flops, and display stages' },
          { src: 'assets/images/projects/embedded/two-dices/555-circuit-simulation.png', alt: 'CircuitJS1 simulation of the alternative dice circuit using three 555 timers' }
        ]
      }
    ]
  },
  {
    id: 'visual',
    index: '03',
    name: 'Visual Computing',
    description: 'Rendering, image processing, computer vision, and multimedia work that turns computation into visual output.',
    featured: {
      id: 'opengl',
      title: 'OpenGL 3D Rendering System',
      href: 'projects/opengl.html',
      meta: 'C++ · OpenGL · Rendering',
      description: 'A custom rendering pipeline covering OBJ loading, mesh construction, shaders, materials, lighting, and texturing.',
      tags: ['C++', 'OpenGL', 'Shader', '3D Rendering'],
      linkLabel: 'Read project',
      videos: [
        { title: 'Stage 1 — OBJ loader and mesh construction', youtubeId: 'ttChRcuhHQU' },
        { title: 'Stage 2 — Shaders and materials', youtubeId: 'pkUp02u5Pzg' },
        { title: 'Stage 3 — Lighting and texturing', youtubeId: '56LOqgYDw74' }
      ],
      images: [
        {
          src: 'assets/images/projects/visual/opengl-rendering.jpg',
          alt: 'OpenGL rendering competition scenes with lighting and texturing'
        },
        {
          src: 'assets/images/projects/visual/opengl-system-overview.jpg',
          alt: 'OpenGL OBJ loader, shader and material system, and lighting comparison'
        },
        {
          src: 'assets/images/projects/visual/opengl-final-love-you-partner.png',
          alt: 'Love You Partner final OpenGL scene with warm fireplace lighting'
        },
        {
          src: 'assets/images/projects/visual/opengl-final-weeping-angel.png',
          alt: 'Weeping Angel final OpenGL scene in a dark stone interior'
        }
      ]
    },
    otherLabel: 'Other visual projects',
    otherProjects: [
      {
        id: 'sign-language-recognition',
        title: 'Sign Language Recognition',
        type: 'Computer vision',
        description: 'A 36-class ASL fingerspelling classifier developed with CNN and spatial self-attention experiments in MATLAB.',
        href: 'projects/sign-language.html',
        linkLabel: 'Read project →',
        tags: ['MATLAB', 'CNN', 'Self-Attention', 'Image Classification'],
        details: [
          'This project classifies static ASL fingerspelling images across 36 classes: the letters A-Z and digits 0-9. A public dataset from Hugging Face is loaded locally through a MATLAB image datastore and normalized to a 400 by 400 RGB input.',
          'The development process began with a basic CNN workflow, then explored data augmentation, training duration, learning rate, dropout, and a custom single-head spatial self-attention layer. The highest recorded validation accuracy in the current experiments is 94.00%.',
          'The current demonstrator performs single-image inference: a user selects an image by its dataset index, the saved SA_net2 model classifies it, and MATLAB displays the predicted label. It is an image-classification prototype rather than continuous sign-language translation.'
        ],
        overviewFacts: [
          { label: 'Classification target', value: '36 static gesture classes covering A-Z and 0-9.' },
          { label: 'Input', value: 'RGB images resized to 400 by 400 pixels.' },
          { label: 'Model work', value: 'CNN training with augmentation, dropout, and custom spatial self-attention experiments.' },
          { label: 'Best recorded result', value: '94.00% validation accuracy; an independent test-set result has not yet been documented.' },
          { label: 'Current interaction', value: 'Single-image prediction from a local ASL dataset, selected by image index.' }
        ],
        links: [
          { label: 'View presentation ↗', url: 'https://www.canva.com/design/DAHJatEpzWk/nstlMZrI2ZfZJ_c39smrTg/view' }
        ],
        videos: [
          { title: 'Sign language recognition demonstration', youtubeId: '01JUBV2v3jM' }
        ],
        image: {
          src: 'assets/images/projects/visual/sign-language/validation-94.png',
          alt: 'Training curves and a recorded validation accuracy of 94.00 percent after 10 epochs',
          className: 'media-contain'
        },
        images: [
          { src: 'assets/images/projects/visual/sign-language/validation-94.png', alt: 'Presentation documenting 94.00 percent validation accuracy after 10 epochs and 180 iterations' },
          { src: 'assets/images/projects/visual/sign-language/initial-training.png', alt: 'Initial four-epoch training experiment with 2.86 percent validation accuracy' },
          { src: 'assets/images/projects/visual/sign-language/data-augmentation.png', alt: 'MATLAB image augmentation settings for rotation and reflection' },
          { src: 'assets/images/projects/visual/sign-language/training-20-epochs.png', alt: 'Intermediate training curves with 93.14 percent validation accuracy and an overfitting concern noted in the presentation' },
          { src: 'assets/images/projects/visual/sign-language/gesture-reference.png', alt: 'Gesture reference chart beside the MATLAB project code in the original presentation' }
        ]
      },
      {
        id: 'mini-photoshop',
        title: 'Mini Photoshop',
        type: 'Image processing',
        description: 'An independently developed C++ image editor for resizing, color adjustments, Gaussian and bilateral filtering, and Sobel edge detection.',
        href: 'projects/project.html?id=mini-photoshop',
        linkLabel: 'Read project →',
        tags: ['C++', 'Image Processing', 'Gaussian Blur', 'Sobel Filter'],
        details: [
          'Mini Photoshop is a C++ image-processing tool that I developed independently, using familiar Photoshop editing functions as a reference. The project brings basic image transformations into an interactive interface where users can load an image, apply an operation, and inspect the result.',
          'The resizing tools support proportional enlargement, proportional reduction, and non-proportional enlargement. Color adjustments include grayscale conversion, negative images, and increasing or decreasing contrast.',
          'The image-processing functions include Gaussian blur, bilateral filtering, and Sobel edge detection. The project examples place original and processed images side by side to compare smoothing, edge-preserving filtering, and extracted outlines.',
          'The implementation report documents bilinear interpolation for resizing, weighted grayscale conversion, and contrast adjustment with pixel values clamped to the valid range. Filtering work includes normalized Gaussian kernels with reflected borders, bilateral weights based on spatial and color differences, and Sobel gradients computed across the color channels.',
          'By connecting image-processing algorithms with a graphical interface, the project explores how pixel-level operations become practical editing tools with directly visible results.'
        ],
        overviewFacts: [
          { label: 'Development & role', value: 'Independent project developed in C++.' },
          { label: 'User workflow', value: 'Load an image, select an editing operation, and view the processed result in the interface.' },
          { label: 'Resizing', value: 'Proportional enlargement and reduction, plus non-proportional enlargement.' },
          { label: 'Color adjustments', value: 'Grayscale, negative images, and higher or lower contrast.' },
          { label: 'Image filters', value: 'Gaussian blur for smoothing, bilateral filtering for smoothing while preserving edges, and Sobel filtering for edge detection.' },
          { label: 'Implementation structure', value: 'ImageScaler.cpp handles bilinear resizing, ImageColorAdjuster.cpp handles pixel adjustments, and ImageFilter.cpp contains the filtering operations.' },
          { label: 'Performance work', value: 'Gaussian filtering was optimized through parallel loops and separable convolution; bilateral filtering used a lookup table for color-difference weights. The report records approximately 1.58× and 5.35× Gaussian speedups in its experiments; these are environment-specific measurements.' }
        ],
        image: {
          src: 'assets/images/projects/visual/mini-photoshop/sobel-comparison.jpg',
          alt: 'Mini Photoshop interface comparing an original image with its Sobel edge-detection result',
          className: 'media-contain'
        },
        images: [
          { src: 'assets/images/projects/visual/mini-photoshop/sobel-comparison.jpg', alt: 'Original image and Sobel edge-detection result in the Mini Photoshop interface' },
          { src: 'assets/images/projects/visual/mini-photoshop/resize-comparison.jpg', alt: 'Original image with proportional enlargement, proportional reduction, and non-proportional enlargement' },
          { src: 'assets/images/projects/visual/mini-photoshop/contrast-comparison.jpg', alt: 'Original image compared with increased and decreased contrast' },
          { src: 'assets/images/projects/visual/mini-photoshop/grayscale-comparison.jpg', alt: 'Color image and its weighted grayscale conversion' },
          { src: 'assets/images/projects/visual/mini-photoshop/negative-comparison.jpg', alt: 'Original image and its inverted-color negative' },
          { src: 'assets/images/projects/visual/mini-photoshop/gaussian-comparison.jpg', alt: 'Original image and its Gaussian blur result' },
          { src: 'assets/images/projects/visual/mini-photoshop/bilateral-comparison.jpg', alt: 'Original image and its bilateral-filtered result preserving edges while smoothing' }
        ]
      },
      {
        id: 'blender-vfx-movie',
        title: 'Blender VFX / Movie',
        type: 'VFX short film',
        description: 'A dark 404-themed short film combining live-action imagery with Blender visual effects.',
        href: 'projects/project.html?id=blender-vfx-movie&v=20260827-11',
        linkLabel: 'Read project →',
        tags: ['Blender', 'VFX', 'Movie', 'Compositing'],
        details: [
          'Blender VFX / Movie is a short visual piece built around the idea of “404 — Where there’s will, there’s a way.” Its candle poster establishes the project’s dark tone and recurring light motif.',
          'The film combines live-action hallway footage with an unsettling digital figure, using composition, lighting, and visual effects to turn an ordinary location into a surreal cinematic scene.'
        ],
        links: [
          { label: 'Watch on YouTube ↗', url: 'https://youtu.be/LgfpdQ-KZZE' }
        ],
        videos: [
          { title: 'Blender VFX / Movie — 404', youtubeId: 'LgfpdQ-KZZE' }
        ],
        image: {
          src: 'assets/images/projects/visual/blender-vfx-movie/hallway-vfx.png',
          alt: 'A dark hallway scene with a headless figure created for the Blender VFX movie'
        },
        images: [
          {
            src: 'assets/images/projects/visual/blender-vfx-movie/hallway-vfx.png',
            alt: 'Final Blender VFX movie frame showing a headless figure in a dark hallway'
          },
          {
            src: 'assets/images/projects/visual/blender-vfx-movie/404-poster.png',
            alt: '404 movie poster featuring a candle and the line Where there is will there is a way'
          }
        ]
      },
      {
        id: 'blender-match-move',
        title: 'Blender VFX / Match Move',
        type: 'Multimedia',
        description: '3D character integration with live-action footage.',
        href: 'projects/project.html?id=blender-match-move',
        linkLabel: 'Read project →',
        tags: ['Blender', 'Match Move', 'VFX', '3D'],
        details: [
          'This multimedia project uses match moving to align a virtual camera with live-action footage before integrating a 3D character into the scene.',
          'The final result combines camera tracking, 3D placement, lighting, and compositing so the digital subject follows the motion and perspective of the original shot.'
        ],
        videos: [
          { title: 'Blender match move result', youtubeId: '7tjHvwdO8zc' }
        ],
        image: {
          src: 'assets/images/projects/visual/blender-match-move.jpg',
          alt: 'Blender match move workflow and final character integration',
          className: 'media-contain media-dark'
        }
      }
    ]
  }
];

export const featuredProjects = Object.fromEntries(
  projectTracks.map(track => [track.featured.id, track.featured])
);

export const projectLookup = Object.fromEntries(
  projectTracks.flatMap(track => [
    [track.featured.id, { ...track.featured, discipline: track.name }],
    ...track.otherProjects.map(project => [project.id, {
      ...project,
      discipline: track.name,
      images: project.images || [project.image]
    }])
  ])
);
