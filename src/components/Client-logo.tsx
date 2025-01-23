import { useState } from "react"

const logos = [
  { name: "Dropbox", src: "https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg?height=50&width=50", top: "5%", left: "25%" },
  { name: "Shopify", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oLgEHdessn5wxtcffb_Nc6S27svKv53rCQ&s?height=50&width=50", top: "10%", left: "45%" },
  { name: "Dribbble", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb3wtxyqRHzoBqRX8awniBegDu7F-Q5FJ6YQ&s?height=50&width=50", top: "5%", left: "65%" },
  { name: "Atlassian", src: "https://static-00.iconduck.com/assets.00/atlassian-icon-512x512-2p7fz86w.png? height=50&width=50", top: "30%", left: "10%" },
  { name: "Trello", src: "https://1000logos.net/wp-content/uploads/2021/05/Trello-logo.png?height=50&width=50", top: "50%", left: "30%" },
  { name: "Microsoft", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8u8BZcgcIxcfgSJsas_HDf2pfYTBlmo2q3g&s?height=50&width=50", top: "35%", left: "50%" },
  { name: "GitLab", src: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png?height=50&width=50", top: "30%", left: "70%" },
  { name: "GitHub", src: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png?height=50&width=50", top: "45%", left: "15%" },
  { name: "Google Cloud", src: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png?height=90&width=90", top: "50%", left: "55%" },
  { name: "Adobe", src: "https://upload.wikimedia.org/wikipedia/commons/8/87/Adobe_logo.jpg?height=50&width=50", top: "70%", left: "20%" },
  { name: "Figma", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSenm4zDGi-c648kjg_N6dOqceETWp8CWpgTQ&s?height=50&width=50", top: "75%", left: "45%" },
  { name: "Notion", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSenm4zDGi-c648kjg_N6dOqceETWp8CWpgTQ&s?height=50&width=50", top: "65%", left: "65%" },
  { name: "Adobe", src: "https://upload.wikimedia.org/wikipedia/commons/8/87/Adobe_logo.jpg?height=50&width=50", top: "10%", left: "80%" },

]

export function ClientLogos() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="relative py-18">
      <div className="relative h-[500px] md:h-[500px]">
        {logos.map((logo, index) => (
          <div key={index} className="absolute" style={{ top: logo.top, left: logo.left }}>
            <div className="relative w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center">
              <img
                src={logo.src || "/placeholder.svg"}
                alt={`${logo.name} logo`}
                width={75}
                height={75}
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
      <button
        className="mt-8 mx-auto block text-sm text-gray-500 hover:text-gray-700"
        onClick={() => setShowMore(!showMore)}
      >
        Show more →
      </button>
    </div>
  )
}

