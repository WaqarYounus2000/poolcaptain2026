"use client";

import { useEffect, useState } from "react";
import "./dashboard.css";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("gallery");

  const [items, setItems] = useState([]);
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [deletingKey, setDeletingKey] = useState(null);

  const [selected, setSelected] = useState([]);

  // ================= FETCH =================
  const fetchItems = async () => {
    setLoading(true);

    const res = await fetch("/api/gallery");
    const data = await res.json();

    console.log("GALLERY:", data);

    setItems(data.data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // ================= UPLOAD =================
  const uploadFiles = async () => {
    if (!file) return alert("Select file(s)");

    setUploading(true);

    const files = Array.from(file);

    try {
      for (let f of files) {
        const formData = new FormData();
        formData.append("file", f);

        await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
      }

      alert("Uploaded successfully 🚀");
      setFile(null);
      fetchItems();
    } catch (err) {
      alert("Upload failed");
    }

    setUploading(false);
  };

  // ================= DELETE =================
  const deleteItem = async (key) => {
    setDeletingKey(key);

    await fetch("/api/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key }),
    });

    fetchItems();
    setDeletingKey(null);
  };

  // ================= MULTI DELETE =================
  const toggleSelect = (key) => {
    setSelected((prev) =>
      prev.includes(key)
        ? prev.filter((k) => k !== key)
        : [...prev, key]
    );
  };

  const deleteSelected = async () => {
    for (let key of selected) {
      await fetch("/api/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key }),
      });
    }

    setSelected([]);
    fetchItems();
  };

  return (
    <div className="dashboard">

      {/* TABS */}
      <div className="tabs">
        <button onClick={() => setActiveTab("gallery")}>Gallery</button>
        <button onClick={() => setActiveTab("upload")}>Upload</button>
        <button onClick={() => setActiveTab("settings")}>Settings</button>
      </div>

      {/* ================= GALLERY ================= */}
      {activeTab === "gallery" && (
        <div>

          <h2>Media Gallery (Images + Videos)</h2>

          {selected.length > 0 && (
            <button className="bulk-delete" onClick={deleteSelected}>
              Delete Selected ({selected.length})
            </button>
          )}

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="gallery">

              {items.map((item) => {
                const isVideo =
                  item.type === "video" ||
                  item.image?.includes(".mp4") ||
                  item.image?.includes(".mov");

                return (
                  <div className="card" key={item.key}>

                    {/* SELECT */}
                    <input
                      type="checkbox"
                      className="check"
                      checked={selected.includes(item.key)}
                      onChange={() => toggleSelect(item.key)}
                    />

                    {/* MEDIA */}
                    {isVideo ? (
                      <div className="video-box">
                        <img src={item.image} className="thumb" />
                        <div className="play-icon">▶</div>
                      </div>
                    ) : (
                      <img src={item.image} />
                    )}

                    {/* DELETE */}
                    <button
                      onClick={() => deleteItem(item.key)}
                      disabled={deletingKey === item.key}
                    >
                      {deletingKey === item.key
                        ? "Deleting..."
                        : "Delete"}
                    </button>

                  </div>
                );
              })}

            </div>
          )}

        </div>
      )}

      {/* ================= UPLOAD ================= */}
      {activeTab === "upload" && (
        <div className="upload-tab">

          <h2>Upload Images / Videos</h2>

          <input
            type="file"
            multiple
            accept="image/*,video/*"
            onChange={(e) => setFile(e.target.files)}
          />

          <button onClick={uploadFiles} disabled={uploading}>
            {uploading ? "Uploading..." : "Upload Media"}
          </button>

        </div>
      )}

      {/* SETTINGS */}
      {activeTab === "settings" && (
        <div>
          <h2>Settings</h2>
          <p>Future upgrades here...</p>
        </div>
      )}

    </div>
  );
}