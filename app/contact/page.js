"use client";

import React from "react";

const ContactPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Me</h1>
      <div style={styles.profileSection}>
        <img
          src="/images/profil.jpeg" // Ganti dengan path foto kamu
          alt="Profile"
          style={styles.profileImage}
        />
        <h2 style={styles.name}>Arumdafta Nawa Hagiaza</h2>
        <p style={styles.description}>
          Halo! Saya Arumdafta Nawa Hagiaza seorang pengembang web yang bersemangat dengan teknologi
          dan inovasi. Saya seorang mahasiswa Fakultas Komputer jurusan Sistem Informasi semester 4 dari Ma'soem University. Jangan ragu untuk menghubungi saya melalui form di bawah
          ini.
        </p>
      </div>

      {/* Bagian Baru: Skills */}
      <div style={styles.skillsSection}>
        <h2 style={styles.sectionTitle}>Skills</h2>
        <ul style={styles.skillsList}>
          <li style={styles.skillItem}>HTML & CSS</li>
          <li style={styles.skillItem}>JavaScript</li>
          <li style={styles.skillItem}>React.js</li>
          <li style={styles.skillItem}>Node.js</li>
          <li style={styles.skillItem}>UI/UX Design</li>
        </ul>
      </div>

      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>Message:</label>
          <textarea
            id="message"
            name="message"
            style={styles.textarea}
            required
          ></textarea>
        </div>
        <button type="submit" style={styles.button}>
          Send
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#FFF5F7", // Latar belakang pink pastel
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "2rem",
    color: "#D6336C", // Warna pink pastel untuk judul
    marginBottom: "20px",
  },
  profileSection: {
    marginTop: "20px",
    textAlign: "center",
  },
  profileImage: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
    border: "3px solid #FFD1DC", // Border pink pastel
  },
  name: {
    fontSize: "1.5rem",
    color: "#D6336C", // Warna pink pastel untuk nama
    marginBottom: "10px",
  },
  description: {
    fontSize: "1rem",
    color: "#555", // Warna abu-abu untuk teks agar tetap terbaca
    lineHeight: "1.5",
    marginBottom: "30px",
  },
  skillsSection: {
    marginTop: "30px",
    textAlign: "left",
    backgroundColor: "#FFE4E6", // Latar belakang pink pastel untuk bagian skills
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    color: "#D6336C", // Warna pink pastel untuk judul bagian
    marginBottom: "15px",
  },
  skillsList: {
    listStyleType: "none",
    padding: "0",
  },
  skillItem: {
    fontSize: "1rem",
    color: "#555", // Warna abu-abu untuk teks agar tetap terbaca
    marginBottom: "10px",
  },
  form: {
    marginTop: "30px",
    textAlign: "left",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    fontSize: "1rem",
    color: "#D6336C", // Warna pink pastel untuk label
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #FFD1DC", // Border pink pastel
    borderRadius: "5px",
    backgroundColor: "#FFF5F7", // Latar belakang pink pastel untuk input
    color: "#333", // Warna teks tetap gelap agar terbaca
  },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #FFD1DC", // Border pink pastel
    borderRadius: "5px",
    backgroundColor: "#FFF5F7", // Latar belakang pink pastel untuk textarea
    color: "#333", // Warna teks tetap gelap agar terbaca
    height: "100px",
  },
  button: {
    display: "block",
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    color: "#FFF", // Warna teks putih
    backgroundColor: "#D6336C", // Warna pink pastel untuk tombol
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
};

export default ContactPage;