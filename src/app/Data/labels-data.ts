export enum Language{
    FRENCH = "fr",
    ENGLISH = "en"
}

export const en_labels : Labels = {
    title : "Python, DevOps and Machine Learning Developer",
    sub_title : "I never back down from a challenge",

    about_title : "About me",
    about_desc : `I’ve studied at Polytechnique in software engineering. I describe myself
    as a person with integrity, hardworking and passionate. Combining my two
    greatest passions, mathematics and programming, I have been challenging
    myself by developing software for 8 years now. Finally, I think that good
    communication is what makes a great team.`,
    about_education_title: "Education",
    about_education_poly: "Polytechnique Montreal (2018 - 2021)",
    about_education_cegep : "Cegep Bois-de-Boulogne (2016 - 2018)",
    about_education_beaubois : "Beaubois College (2011 - 2016)",
    about_language_title : "Languages",
    about_language_french : "French (Native)",
    about_language_english : "English (Native)",
    about_scholarships_title : "Scolarships",
    about_scholarships_poly : `Mention of Excellence for outstanding performance at Polytechnique Montreal (GPA : 3,63/4)`,
    about_scholarships_admission : `Recipient of the Admission Excellence Scholarship at Polytechnique Montreal`,
    about_certification_title : "Certifications",
    about_certification_aws_spec : `Recipient of the AWS Certified Machine Learning Specialty certification`,
    about_certification_aws_found : "Recipient of the AWS Cloud Practitioner certification",
    about_hack_title : "Hackathon",
    about_hack_google : "Google Tech Challenge",
    about_hack_mcgillphys : "McGill Physics Hackathon 4th place",
    about_hack_aiudem : "AI Hackathon at UdeM 6th place",
    about_hack_hackqc : "HackQC (3 days): environmental website",
    about_hack_concoAI : "ConcordAI Artificial Intelligence Hackathon",
    about_hack_lhgames : "LHGames",
    about_hack_bdc : "Hackathon BDC",
    about_hack_capture_flag : "2 Capture The Flag",
    about_reward_title : "Rewards",
    about_reward_pitch : "2nd place in a pitch competition at Polytechnique Montreal",
    about_reward_math : "2nd place in a math competition at College Bois-de-Boulogne (COMC)",

    skill_title : "Skill",

    experience_title : "Experience",

    project_title : "Projects",
    project_featured : "Featured Project",
    project_code : "Code",
    project_demo : "Demo",
    other_notebook_title : "Other Noteworthy Projects",

    contact_title : "Contact",
    contact_intouch : "Get In Touch",
    contact_message : "Feel free to reach out to me. I am always looking for new opportunities.",
    contact_hello : "Say Hello",

    toolbar_resume : "Resume"

}

export const fr_labels : Labels = {
    title : "Développeur Python, DevOps et Machine Learning",
    sub_title : "Je n'abandonne jamais face à l'adversité",

    about_title : "À propos de moi",
    about_desc : `J'ai étudié à Polytechnique en génie logiciel. je me décris
    comme étant une personne intègre, travailleuse et passionnée. Combinant mes deux
    grandes passions, les mathématiques et la programmation, j'ai relevé des défis
    en développant des logiciels depuis maintenant 8 ans. Enfin, je pense que c'est bien
    la communication qui fait une bonne équipe.`,
    about_education_title : "Éducation",
    about_education_poly : "Polytechnique Montréal (2018 - 2021)",
    about_education_cegep : "Cégep Bois-de-Boulogne (2016 - 2018)",
    about_education_beaubois : "Collège Beaubois (2011 - 2016)",
    about_language_title : "Langues",
    about_language_french : "Français (natif)",
    about_language_english : "Anglais (natif)",
    about_scholarships_title : "Bourses",
    about_scholarships_poly : `Mention d'excellence pour performance exceptionnelle à Polytechnique Montréal (GPA : 3,63/4)`,
    about_scholarships_admission : "Récipiendaire de la Bourse d'excellence à l'admission à Polytechnique Montréal",
    about_certification_title : "Certifications",
    about_certification_aws_spec : "Récipiendaire de la certification AWS Certified Machine Learning Specialty",
    about_certification_aws_found : "Récipiendaire de la certification AWS Cloud Practitioner",
    about_hack_title : "Hackathon",
    about_hack_google : "Google Tech Challenge",
    about_hack_mcgillphys : "Hackathon de physique de McGill 4e place",
    about_hack_aiudem : "Hackathon IA à l'UdeM 6e place",
    about_hack_hackqc : "HackQC (3 jours) : site environnemental",
    about_hack_concoAI : "Hackathon sur l'intelligence artificielle ConcordAI",
    about_hack_lhgames : "LHGames",
    about_hack_bdc : "Hackathon BDC",
    about_hack_capture_flag : "2 Capture The Flag",
    about_reward_title : "Prix",
    about_reward_pitch : "2e place à un concours de pitch à Polytechnique Montréal",
    about_reward_math : "2e place à un concours de mathématiques au Collège Bois-de-Boulogne (COMC)",

    skill_title : "Connaissances",

    experience_title : "Expérience",

    project_title : "Projets",
    project_featured : "Projet vedette",
    project_code : "Code",
    project_demo : "Démo",
    other_notebook_title : "Autres projets",

    contact_title : "Contacter",
    contact_intouch : "Entrer en contact",
    contact_message : "N'hésitez pas à me contacter. Je suis toujours à la recherche de nouvelles opportunités.",
    contact_hello : "Contactez moi",

    toolbar_resume : "CV"
}

// Scholarships

export interface Labels {
    title : string,
    sub_title : string,

    about_title : string,
    about_desc : string,
    about_education_title : string,
    about_education_poly : string,
    about_education_cegep : string,
    about_education_beaubois : string,
    about_language_title : string,
    about_language_french : string,
    about_language_english : string,
    about_scholarships_title : string,
    about_scholarships_poly : string,
    about_scholarships_admission : string,
    about_certification_title : string,
    about_certification_aws_spec : string,
    about_certification_aws_found : string,
    about_hack_title : string,
    about_hack_google : string,
    about_hack_mcgillphys : string,
    about_hack_aiudem : string,
    about_hack_hackqc : string,
    about_hack_concoAI : string,
    about_hack_lhgames : string,
    about_hack_bdc : string,
    about_hack_capture_flag : string,
    about_reward_title : string,
    about_reward_pitch : string,
    about_reward_math : string,

    skill_title : string,

    experience_title : string,

    project_title : string,
    project_featured : string,
    project_code : string,
    project_demo : string,
    other_notebook_title : string,

    contact_title : string,
    contact_intouch : string,
    contact_message : string,
    contact_hello : string,

    toolbar_resume : string
}