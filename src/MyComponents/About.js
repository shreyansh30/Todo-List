import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"

const About = () => {
  return (
    <div className='container my-3'>
      <p>
        MyTodo App is a simple and user-friendly tool designed to help you organize your daily tasks and boost your productivity.
        The intuitive interface makes it easy for anyone to manage their schedule, whether you’re a student, professional, or someone who just wants to stay organized.
      </p>
      <p>
        With MyTodo App, you can break down larger goals into manageable tasks and track your progress day by day. Our responsive design ensures you get a seamless experience on mobile, tablet, and desktop.
      </p>
      <h3>Features:</h3>
      <ul>
        <li>Add, edit, and delete tasks easily</li>
        <li>Responsive design for any device</li>
        <li>Mark tasks as completed [Under development]</li>
        <li>Search for tasks in your list [Under development]</li>
      </ul>
      <p>
        Whether you need to manage your work assignments, personal errands, or long-term goals, MyTodo App keeps you on track and ensures you never miss an important task.
      </p>
      <p>Follow me on Social Media:</p>
      <ul style={{ listStyleType: "none", paddingLeft: 0, display: "flex", gap: "1em" }}>
        <li>
          <a href="https://github.com/shreyansh30" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} style={{ verticalAlign: "middle", color: "#000" }} /> GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/shreyanshkumar30" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} style={{ verticalAlign: "middle", color: "#0077B5" }} /> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/l_._shreyansh_._l" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} style={{ verticalAlign: "middle", color: "#E1306C" }} /> Instagram
          </a>
        </li>
        <li>
          <a href="https://twitter.com/ShreyanshK30" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} style={{ verticalAlign: "middle", color: "#1DA1F2" }} /> Twitter
          </a>
        </li>
      </ul>
    </div>
  )
}

export default About