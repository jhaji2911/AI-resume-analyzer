### APIs required for the screens
* Auth
	* Login ⇒ To login with user Id and password
	* Forgot Password ⇒ maybe yes
	* Logout ⇒ Destroy session
	* Create User ⇒ maybe in next version
  
* Dashboard
	* GET: listJDs/with Filter ⇒ 
		* title : string
		* positionOpen: boolean
		* experience: string in year
		* profileLocation: string
		* createdAt: Date
		* updatedAt: Date
		* Status: enum : { Active, Closed }
		* isAnalyzed: boolean

* Create JD
	* POST: createJD ⇒
		* title: string
		* positionOpen: boolean
		* experience: string in years
		* profileLocation: string
		* file: File

* List application
	* GET: listApplications/id : {JDId} ⇒ 
		* jdTitle: string
		* positionOpen: boolean
		* experience: string
		* profileLocation: string
		* applications: Array
			* name: string
			* skills: string[]
			* responsibilities: string []
			* education: string 
			* experience : string in years
			* location : string
			* score: number
			* isQuestionsGenerated: boolean

* Generate Questions
	* POST: generateQuestions {the payload remains the same, the candidate's profile}
		* name: string
		* title: string
		* primarySkills: string[]
		* experience: string in years
		* location: string
		* score: number
		* Q&A: Array
			* question: string
			* probableAnswer: string
			* isMatched: boolean : for voice processing
