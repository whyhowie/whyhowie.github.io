// Project list with placeholder images
const projects = [
    {
        title: "Robot Wrangling",
        year: "2025 - Present",
        summary: "Short description...",
        image: "https://placehold.co/400x300?text=Robot\\nWrangling",
        gallery: [
            "https://placehold.co/600x400?text=Robot\\nWrangling+1",
            "https://placehold.co/600x400?text=Robot\\nWrangling+2"
        ],
        description: `.`,
    },
    {
        title: "Notification Timing in Autonomous Vehicles",
        year: "2023 - 2025",
        summary: "Short description...",
        image: "https://placehold.co/400x300?text=Notifications\\nin+AVs",
        video: "",
        gallery: [
            "portfolio_stuff/Research/Notification Timing/0001.jpg",
            "portfolio_stuff/Research/Notification Timing/0002.jpg",
            "portfolio_stuff/Research/Notification Timing/0003.jpg",
            "portfolio_stuff/Research/Notification Timing/0004.jpg",
            "portfolio_stuff/Research/Notification Timing/0005.jpg",
            "portfolio_stuff/Research/Notification Timing/0006.jpg",
            "portfolio_stuff/Research/Notification Timing/0007.jpg",
            "portfolio_stuff/Research/Notification Timing/0008.jpg",
            // "portfolio_stuff/Research/Notification Timing/0009.jpg",
            "portfolio_stuff/Research/Notification Timing/0010.jpg",
            "portfolio_stuff/Research/Notification Timing/0011.jpg",
            "portfolio_stuff/Research/Notification Timing/0012.jpg",
            "portfolio_stuff/Research/Notification Timing/0013.jpg",
            "portfolio_stuff/Research/Notification Timing/0014.jpg",
            "portfolio_stuff/Research/Notification Timing/0015.jpg",
            "portfolio_stuff/Research/Notification Timing/0016.jpg",
            "portfolio_stuff/Research/Notification Timing/0017.jpg",
            "portfolio_stuff/Research/Notification Timing/0018.jpg",
            "portfolio_stuff/Research/Notification Timing/0019.jpg",
            "portfolio_stuff/Research/Notification Timing/0020.jpg",
            "portfolio_stuff/Research/Notification Timing/0021.jpg",
            "portfolio_stuff/Research/Notification Timing/0022.jpg",
            "portfolio_stuff/Research/Notification Timing/0023.jpg",
            "portfolio_stuff/Research/Notification Timing/0024.jpg",
            "portfolio_stuff/Research/Notification Timing/0025.jpg",
            "portfolio_stuff/Research/Notification Timing/0026.jpg",
            "portfolio_stuff/Research/Notification Timing/0027.jpg",
            "portfolio_stuff/Research/Notification Timing/0028.jpg",
            "portfolio_stuff/Research/Notification Timing/0029.jpg",
            "portfolio_stuff/Research/Notification Timing/0030.jpg",
            "portfolio_stuff/Research/Notification Timing/0031.jpg",
            "portfolio_stuff/Research/Notification Timing/0032.jpg",
            "portfolio_stuff/Research/Notification Timing/0033.jpg",
            "portfolio_stuff/Research/Notification Timing/0034.jpg",
            "portfolio_stuff/Research/Notification Timing/0035.jpg",
            "portfolio_stuff/Research/Notification Timing/0036.jpg",
            "portfolio_stuff/Research/Notification Timing/0037.jpg",
            "portfolio_stuff/Research/Notification Timing/0038.jpg",
            "portfolio_stuff/Research/Notification Timing/0039.jpg",
            "portfolio_stuff/Research/Notification Timing/0040.jpg",
            "portfolio_stuff/Research/Notification Timing/0041.jpg",
        ],
        description: `<h4><a href="https://doi.org/10.1145/3744333.3747831" target="_blank" rel="noopener noreferrer">
            See publication here!</a></h4>
            <h4><a href="https://doi.org/10.1184/R1/c.7894613" target="_blank" rel="noopener noreferrer">
            See artifact collection here!</a></h4>
            <p>
                Future high-level autonomous vehicles (AVs) will enable drivers to engage in non-driving-related tasks (NDRTs) during autopilot. 
                Occasionally, an in-vehicle agent may need to notify drivers of important, yet not urgent, information. 
                Through a four-session interruptibility study on a desktop autonomous driving simulator, we investigated how drivers assess their availability to receive notifications by rating moments as good or bad for interruption. 
                Our results suggest drivers fall into four notification availability groups: always available, prioritizing NDRTs, task-content dependent, and mental-state dependent. 
                Using multimodal behavioral data of the participants and vehicle data from the simulation, we trained a proof-of-concept classification model to determine the appropriate timing to send non-emergency notifications to drivers doing NDRTs. 
                Head pose and gaze direction data from the eye tracker were crucial in the predictions. Based on our quantitative modeling and qualitative observation, we discuss the feasibility of notification timing prediction in the real world and design considerations from individual, task, and context perspectives.
            </p`,
    },
    {
        title: "Robot Expression Design through Puppeteering",
        year: "2020 - 2023",
        summary: "Another project",
        image: "portfolio_stuff/Research/Robot Puppet/Puppet_Demo_4K.jpg",
        gallery: [
            "portfolio_stuff/Research/Robot Puppet/Slide1_4K.JPG",
            "portfolio_stuff/Research/Robot Puppet/Slide2_4K.JPG",
            "portfolio_stuff/Research/Robot Puppet/Slide3_4K.JPG",
            "portfolio_stuff/Research/Robot Puppet/Slide4_4K.JPG",
            "portfolio_stuff/Research/Robot Puppet/Slide5_4K.JPG",
            "portfolio_stuff/Research/Robot Puppet/Slide6_4K.JPG",
            "portfolio_stuff/Research/Robot Puppet/Slide7_4K.JPG",
        ],
        description: `<h4><a href="https://doi.org/10.48550/arXiv.2207.12544" target="_blank" rel="noopener noreferrer">
            See publication here!</a></h4>
            <p>A human-robot interaction (HRI) project.</p>
            <p>The user remotely manipulates a puppet of a robot to design expressive movements. 
                Through video conferencing software, the user is able to review the actual robot motion in real-time. 
                The designed motions in our user study are reviewed by a separate group of participants 
                through an online survey.
                The Raspberry Pi-based system achieved low latency.
            </p>
            
            <p>
                Techniques/methods/technologies used:
                <ul>
                <li>Arduino programming</li>
                <li>Raspberry Pi</li>
                <li>MQTT Communication</li>
                <li>Rapid Prototyping</li>
                <li>Research experiment design</li>
                <li>Qualtrics survey design</li>
                <li>Amazon Mechanical Turk (MTurk) survey design</li>
                </ul>
            </p>`,
    },
    {
        title: "HRI Study: Effects of Robot Secondary Actions",
        year: "2021 - 2022",
        summary: "Another project",
        image: "portfolio_stuff/Product Design/Misty/conditions_screenshot.png",
        gallery: [
            "portfolio_stuff/Product Design/Misty/Slide13.JPG",
            "portfolio_stuff/Product Design/Misty/Slide18.JPG",
            "portfolio_stuff/Product Design/Misty/Slide19.JPG",
            "portfolio_stuff/Product Design/Misty/Slide20.JPG",
            "portfolio_stuff/Product Design/Misty/Slide21.JPG",
            "portfolio_stuff/Product Design/Misty/Slide22.JPG",
            "portfolio_stuff/Product Design/Misty/Slide27.JPG",
        ],
        description: `<p>
                This is a pilot study for my Human-Robot Interaction class during the 2021 Fall semester. 
                We attempted to investigate whether an increased level of robot idle movements will improve 
                a personal robot's approachability,  animacy, and liveliness.
            </p>
            <p>
                Techniques/methods/technologies used:
                <ul>
                <li>Human-robot interaction study design</li>
                <li>User survey design</li>
                <li>Python + Misty robot REST API</li>
                </ul>
            </p>`,
    },
    {
        title: "VideOrigami: Origami Tutorial Online",
        year: "2022",
        summary: "Another project",
        image: "portfolio_stuff/Product Design/Origami Demo/VideOrigami Screenshot 1.png",
        gallery: [
            "portfolio_stuff/Product Design/Origami Demo/VideOrigami Screenshot 1.png",
            "portfolio_stuff/Product Design/Origami Demo/VideOrigami Screenshot 2.png",
        ],
        description: `<h4><a href="https://whyhowie.github.io/videorigami" target="_blank" rel="noopener noreferrer">Go to project demo!</a></h4>
            <p>
                For many new origami hobbyists, following step-by-step origami diagrams and watching online video tutorials are two convenient ways to learn how to fold origami models. 
                However, certain diagrams in origami instructions can be confusing, as 2D graphics may not effectively represent certain folds. 
                In the meantime, the quality of online video tutorials can vary. Thus, having additional visual aids to supplement the 2D diagrams and videos may be helpful. 
                This project is a demonstration of the concept, presenting one origami model step-by-step through interactive 3D animation and video tutorials.
            </p>
            <p>
                This web application also offers large buttons and bright, contrasting colors, making it accessible to people with color blindness.
            </p>
            <p>
                The original origami visualization algorithm was developed by 
                <a href="https://github.com/RemiKoutcherawy/RemiKoutcherawy.github.io">Rémi Koutcherawy</a>. 
                I moved the code to Three.js for more convenient implementation.
            </p>`,
    },
    {
        title: "Haptic Balls-in-a-Box",
        year: "2021",
        summary: "Another project",
        image: "portfolio_stuff/Product Design/Haptic Box/DSCF2476.JPG",
        gallery: [
            "portfolio_stuff/Product Design/Haptic Box/DSCF2476.JPG",
            "portfolio_stuff/Product Design/Haptic Box/DSCF2477.JPG",
            "portfolio_stuff/Product Design/Haptic Box/DSCF2489.JPG",
            "portfolio_stuff/Product Design/Haptic Box/DSCF2491.JPG",
            "portfolio_stuff/Product Design/Haptic Box/IMG_0341.PNG",
            "portfolio_stuff/Product Design/Haptic Box/Screenshot 2021-06-05 163104.png",
        ],
        description: `<p>
            A haptic device simulating multiple objects rolling within. 
            An Arduino Mega 2560 calculates the orientation of the box using accelerometer readings. 
            The microcontroller then maps the positions of the balls to the vibration output of the motor array. 
            The status of the balls can also be monitored through a graphic interface on Processing.
          </p>
          <p>
            Techniques/methods/technologies used:
            <ul>
              <li>Rapid Prototyping</li>
              <li>Haptic interfaces</li>
              <li>C/C++ programming</li>
              <li>Processing</li>
            </ul>
          </p>`,
    },
    {
        title: "AllMakers: Engineering Startup Concept",
        year: "2021",
        summary: "Another project",
        image: "portfolio_stuff/Product Design/All Makers/Slide1.JPG",
        gallery: [
            "portfolio_stuff/Product Design/All Makers/Slide1.JPG",
            "portfolio_stuff/Product Design/All Makers/Slide2.JPG",
            "portfolio_stuff/Product Design/All Makers/Slide3.JPG",
            "portfolio_stuff/Product Design/All Makers/Slide4.JPG",
            "portfolio_stuff/Product Design/All Makers/Slide5.JPG",
            "portfolio_stuff/Product Design/All Makers/Slide6.JPG",
            "portfolio_stuff/Product Design/All Makers/Slide7.JPG",
            "portfolio_stuff/Product Design/All Makers/Slide8.JPG",
            "portfolio_stuff/Product Design/All Makers/Slide9.JPG",
            "portfolio_stuff/Product Design/All Makers/Slide10.JPG",
            "portfolio_stuff/Product Design/All Makers/Slide11.JPG",
            "portfolio_stuff/Product Design/All Makers/Slide12.JPG",
            "portfolio_stuff/Product Design/All Makers/Slide13.JPG",
            "portfolio_stuff/Product Design/All Makers/Slide14.JPG",
            "portfolio_stuff/Product Design/All Makers/Slide15.JPG",
            "portfolio_stuff/Product Design/All Makers/Slide16.JPG",
            "portfolio_stuff/Product Design/All Makers/Slide17.JPG",
            "portfolio_stuff/Product Design/All Makers/Slide18.JPG",
            "portfolio_stuff/Product Design/All Makers/Slide19.JPG",
            "portfolio_stuff/Product Design/All Makers/Slide20.JPG",
            "portfolio_stuff/Product Design/All Makers/Slide21.JPG",
            "portfolio_stuff/Product Design/All Makers/Slide22.JPG",
        ],
        description: `<p>
            We all have heard stories of successful entrepreneurs, designers, and artists starting off their careers in garages. 
            However, growing up in an urban apartment in a developing country, I never had such knowledge, budget, and space to "tinker around".
          </p>
          <p>
            As a career goal, I hope to extend STEM education to more kids like me in emerging markets.
          </p>
          <p>
            This slide deck was used for my final pitch for an imaginary company in my 
            <i>How to Start and Grow a Hardware Company</i> class at Carnegie Mellon University.
          </p>`,
    },
    {
        title: "Master Toaster",
        year: "2020",
        summary: "Another project",
        image: "portfolio_stuff/Product Design/Toaster/afterfocus_1615357019743-01.jpeg",
        gallery: [
            "portfolio_stuff/Product Design/Origami Demo/VideOrigami Screenshot 1.png",
            "portfolio_stuff/Product Design/Origami Demo/VideOrigami Screenshot 2.png",
        ],
        description: `<p>
                A prototype of an ideal toaster.
                Toasts consistently, no matter if your bread is frozen or not.
                Reincarnation of temperature-monitoring toasters (using infrared sensors).  
            </p>
            <p>
                Due to the pandemic, we couldn't make our prototype more aesthetically pleasing, but you get the idea.
            </p>
            <p>
                Techniques/methods/technologies used:
                <ul>
                <li>SimuLink simulation</li>
                <li>Kano analysis</li>
                <li>Design for manufacturing and assembly</li>
                <li>Rapid prototyping</li>
                </ul>
            </p>`,
    },
    {
        title: "Giant Eagle Scan Pay & Go Interface Redesign",
        year: "2020",
        summary: "Another project",
        image: "portfolio_stuff/Product Design/Giant Eagle/Slide1.JPG",
        gallery: [
            "portfolio_stuff/Product Design/Giant Eagle/Slide1.JPG",
            "portfolio_stuff/Product Design/Giant Eagle/Slide2.JPG",
            "portfolio_stuff/Product Design/Giant Eagle/Slide3.jpg",
            "portfolio_stuff/Product Design/Giant Eagle/Slide4.JPG",
            "portfolio_stuff/Product Design/Giant Eagle/Slide5.JPG",
        ],
        description: `
            <p>
                The final project for the <i>Human Factors</i> class. 
            </p>
            <p>
                Redesigned user interface for the handheld scanner and mobile app. 
                Additionally, I suggested that the weigh station print out labels for scanning and eliminate the log-in process. 
                This reduces the risk of system errors and confusion.
            </p>`,
    },
    {
        title: "Screw Extruder 3D Printer",
        year: "2017-2018",
        summary: "Another project",
        image: "portfolio_stuff/Engineering/3D Printer/MG_7877_edited_Custom.JPG",
        gallery: [
            "portfolio_stuff/Engineering/3D Printer/MG_7877_edited_Custom.JPG",
            "portfolio_stuff/Engineering/3D Printer/RME_updated_CAD_render.JPG",
            "portfolio_stuff/Engineering/3D Printer/MG_7876_Custom.JPG",
            "portfolio_stuff/Engineering/3D Printer/MG_7892_Custom.JPG",
            "portfolio_stuff/Engineering/3D Printer/Picture1.jpg",
            "portfolio_stuff/Engineering/3D Printer/Picture2.png",
            "portfolio_stuff/Engineering/3D Printer/Picture3.png",
        ],
        description: `<p>
            An undergraduate research project at Bucknell University. 
            Featuring a mini screw-based extruder, the system is the first desktop 3D printer capable of printing with plastic and composite pellets.
          </p>
          <p>
            Techniques/methods/technologies used:
            <ul>
              <li>SimuLink simulation</li>
              <li>Rapid prototyping (including RepRap board programming)</li>
              <li>Mechatronics design</li>
              <li>Project Documentation</li>
            </ul>
          </p>`,
    },
    {
        title: "Arduino Pong Console",
        year: "2020",
        summary: "Another project",
        image: "portfolio_stuff/Product Design/Pong Console/Screenshot_20200209_214053-01.jpeg",
        gallery: [
            "portfolio_stuff/Product Design/Pong Console/Screenshot_20200209_214053-01.jpeg",
            "portfolio_stuff/Product Design/Pong Console/IMG_20200208_212736_Custom.jpg",
            "portfolio_stuff/Product Design/Pong Console/IMG_20200208_212816_Custom.jpg",
            "portfolio_stuff/Product Design/Pong Console/project2_bb.png",
        ],
        description: `<p>
            A project for MECH 453 <i>Mechatronics Design</i> class at Bucknell.
            A poor man's Atari.  
          </p>`,
    },
    {
        title: "Rookie UGV",
        year: "2017",
        summary: "Another project",
        image: "portfolio_stuff/Engineering/Battery-Powered Car/IMG_20170501_104425.jpg",
        gallery: [
            "portfolio_stuff/Engineering/Battery-Powered Car/IMG_20170501_104425.jpg",
            "portfolio_stuff/Engineering/Battery-Powered Car/WithoutNameTag.JPG",
            "portfolio_stuff/Engineering/Battery-Powered Car/WithNameTag.JPG",
        ],
        description: `<p">
            This was a class project and is where all engineering started. 
          </p>
          <p">
            Thanks to the rubber bands my mom put into my luggage, 
            this little car climbed up the steepest ramp in my class. 
          </p>`,
    },
];
