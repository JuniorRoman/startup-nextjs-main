"use client";
import { useState } from "react";

const CourseForm = () => {
  const [course, setCourse] = useState({
    title: "",
    subtitle: "",
    subtitledetail: "",
    paragraph: "",
    benefitstitle: "",
    benefits: [],
    suitableFor: [],
    desc: [],
    actualcourse: "",
    data: "",
    publishDate: "",
    sidebarTitle: "",
    sidebarPrice: "",
    sidebarDescription: [],
    sidebarInformation: [],
    authorName: "",
    authorImage: "",
    authorDesignation: "",
    authorTags: [],
    image: "",
  });

  const handleArrayChange = (e, arrayName, index) => {
    const { name, value } = e.target;
    const updatedArray = [...course[arrayName]];
    updatedArray[index] = { ...updatedArray[index], [name]: value };
    setCourse((prev) => ({ ...prev, [arrayName]: updatedArray }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({
      ...course,
      [name]: value,
    });
  };

  const addBenefit = () => {
    setCourse((prev) => ({
      ...prev,
      benefits: [...prev.benefits, { title: "", description: "" }],
    }));
  };

  const addSuitableFor = () => {
    setCourse((prev) => ({
      ...prev,
      suitableFor: [...prev.suitableFor, { paragraph: "" }],
    }));
  };

  const addDesc = () => {
    setCourse((prev) => ({
      ...prev,
      desc: [...prev.desc, { paragraph: "" }],
    }));
  };

  const addSidebarInfo = () => {
    setCourse((prev) => ({
      ...prev,
      sidebarInformation: [
        ...prev.sidebarInformation,
        { name: "", quantity: "", image: "" },
      ],
    }));
  };

  const addSidebarDescription = () => {
    setCourse((prev) => ({
      ...prev,
      sidebarDescription: [
        ...prev.sidebarDescription,
        { paragraph: "" },
      ],    
    }));
  };
      

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Відправка даних на сервер:", course); // Логування даних, які відправляються на сервер

    const response = await fetch("/api/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Курс успішно додано:", data); // Логування для перевірки
      alert("Курс додано!");
    } else {
      const error = await response.text();
      console.error("Помилка при додаванні курсу:", error); // Логування помилки
      alert("Помилка при додаванні курсу: " + error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="mb-5 mt-20 flex max-w-4xl items-center justify-center">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-3 flex flex-col">
              <label>Назва курсу</label>
              <input
                type="text"
                name="title"
                value={course.title}
                onChange={handleChange}
                required
                className="mt-2 border border-gray-500 p-2"
              />
            </div>

            <div className="mb-3 flex flex-col">
              <label>Підзаголовок</label>
              <input
                type="text"
                name="subtitle"
                value={course.subtitle}
                onChange={handleChange}
                className="mt-2 border border-gray-500 p-2"
              />
            </div>

            <div className="mb-3 flex flex-col">
              <label>Деталі підзаголовку</label>
              <input
                type="text"
                name="subtitledetail"
                value={course.subtitledetail}
                onChange={handleChange}
                className="mt-2 border border-gray-500 p-2"
              />
            </div>

            <div className="mb-3 flex flex-col">
              <label>Опис курсу</label>
              <textarea
                name="paragraph"
                value={course.paragraph}
                onChange={handleChange}
                className="mt-2 border border-gray-500 p-2"
              />
            </div>

            <div className="mb-3 flex flex-col">
              <label>Переваги курсу</label>
              <input
                type="text"
                name="benefitstitle"
                value={course.benefitstitle}
                placeholder="Заголовок переваги"
                onChange={handleChange}
                className=" my-3 border border-gray-500 p-2"
              />
              {course.benefits.map((benefit, index) => (
                <div key={index} className="mb-3 flex flex-col">
                  <input
                    type="text"
                    name="title"
                    value={benefit.title}
                    placeholder="Назва переваги"
                    onChange={(e) => handleArrayChange(e, "benefits", index)}
                    className="mb-3 border border-gray-500 p-2"
                  />
                  <textarea
                    name="description"
                    value={benefit.description}
                    placeholder="Опис переваги"
                    onChange={(e) => handleArrayChange(e, "benefits", index)}
                    className="border border-gray-500 p-2"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={addBenefit}
                className="mt-2 bg-primary py-2"
              >
                Додати перевагу
              </button>
            </div>

            <div className="mb-3 flex flex-col">
              <label>Кому підходить цей курс</label>

              {course.suitableFor.map((item, index) => (
                <div key={index}>
                  <textarea
                    name="paragraph"
                    value={item.paragraph}
                    placeholder="Опис підходящої аудиторії"
                    onChange={(e) => handleArrayChange(e, "suitableFor", index)}
                    className="mt-2 w-[50%] border border-gray-500 p-2"
                  />
                </div>
              ))}
              <button
                className="mt-2 bg-primary py-2"
                type="button"
                onClick={addSuitableFor}
              >
                Додати аудиторію
              </button>
            </div>

            <div className="mb-3 mt-5 flex flex-col">
              <label>Додатковий опис курсу</label>
              {course.desc.map((item, index) => (
                <div key={index}>
                  <textarea
                    name="paragraph"
                    value={item.paragraph}
                    placeholder="Опис курсу"
                    onChange={(e) => handleArrayChange(e, "desc", index)}
                    className="w-[50%] border border-gray-500 p-2"
                  />
                </div>
              ))}
              <button
                className="mt-2 bg-primary py-2"
                type="button"
                onClick={addDesc}
              >
                Додати опис
              </button>
            </div>

            <div className="mb-3 flex flex-col">
              <label>Актуальність курсу</label>
              <input
                type="text"
                name="actualcourse"
                value={course.actualcourse}
                onChange={handleChange}
                className=" mt-2 border border-gray-500 p-2"
              />
            </div>

            <div className="mb-3 flex flex-col">
              <label>Дата</label>
              <input
                type="input"
                name="data"
                value={course.data}
                onChange={handleChange}
                className="mt-2 w-[300px] border border-gray-500 p-2"
              />
            </div>

            <div className="mb-3 flex flex-col">
              <label>Дата публікації</label>
              <input
                type="input"
                name="publishDate"
                value={course.publishDate}
                onChange={handleChange}
                className="mt-2 w-[300px] border border-gray-500 p-2"
              />
            </div>

            <div className="mb-3 flex flex-col">
              <label>Заголовок вартості</label>
              <input
                type="text"
                name="sidebarTitle"
                value={course.sidebarTitle}
                onChange={handleChange}
                className="mt-2 w-[300px] border border-gray-500 p-2"
              />
            </div>
            <div className="mb-3 flex flex-col">
              <label>Вартість</label>
              <input
                type="number"
                name="sidebarPrice"
                value={course.sidebarPrice}
                onChange={handleChange}
                className="mt-2 w-[300px] border border-gray-500 p-2"
              />
            </div>

            <div className="mt-5 flex flex-col">
              <label>Опис вартості</label>
              {course.sidebarDescription.map((item, index) => (
                <div key={index}>
                  <input
                    type="text"
                    name="paragraph"
                    value={item.paragraph}
                    placeholder="Опис підходящої аудиторії"
                    onChange={(e) =>
                      handleArrayChange(e, "sidebarDescription", index)
                    }
                    className="mt-2 w-[50%] border border-gray-500 p-2"
                  />
                </div>
              ))}
              <button
                className="mt-2 bg-primary py-2"
                type="button"
                onClick={addSidebarDescription}
              >
                Додати Опис вартості
              </button>
            </div>

            <div className="mt-5 flex flex-col">
              <label>Інформація про курс</label>
              {course.sidebarInformation.map((item, index) => (
                <div key={index}>
                  <input
                    type="text"
                    name="name"
                    value={item.name}
                    placeholder="Назва"
                    onChange={(e) =>
                      handleArrayChange(e, "sidebarInformation", index)
                    }
                    className="border border-gray-300 p-2"
                  />
                  <input
                    type="text"
                    name="quantity"
                    value={item.quantity}
                    placeholder="Кількість"
                    onChange={(e) =>
                      handleArrayChange(e, "sidebarInformation", index)
                    }
                    className="border border-gray-300 p-2"
                  />
                  <input
                    type="text"
                    name="image"
                    value={item.image}
                    placeholder="URL зображення"
                    onChange={(e) =>
                      handleArrayChange(e, "sidebarInformation", index)
                    }
                    className="border border-gray-300 p-2"
                  />
                </div>
              ))}
              <button
                className="mt-2 bg-primary py-2"
                type="button"
                onClick={addSidebarInfo}
              >
                Додати інформацію
              </button>
            </div>

            <div className="mt-5 flex flex-col">
              <label>Ім’я автора</label>
              <input
                type="text"
                name="authorName"
                value={course.authorName}
                onChange={handleChange}
                className="border border-gray-300 p-2"
              />
            </div>

            <div className="mt-5 flex flex-col">
              <label>Зображення автора</label>
              <input
                type="text"
                name="authorImage"
                value={course.authorImage}
                onChange={handleChange}
                className="border border-gray-300 p-2"
              />
            </div>

            <div className="mt-5 flex flex-col">
              <label>Посада автора</label>
              <input
                type="text"
                name="authorDesignation"
                value={course.authorDesignation}
                onChange={handleChange}
                className="border border-gray-300 p-2"
              />
            </div>

            <div className="mt-5 flex flex-col">
              <label>Теги автора</label>
              <input
                type="text"
                name="authorTags"
                value={course.authorTags.join(", ")}
                onChange={(e) =>
                  setCourse((prev) => ({
                    ...prev,
                    authorTags: e.target.value.split(", "),
                  }))
                }
                className="border border-gray-300 p-2"
              />
            </div>

            <div className="mt-5 flex flex-col">
              <label>Зображення курсу</label>
              <input
                type="text"
                name="image"
                value={course.image}
                onChange={handleChange}
                className="border border-gray-300 p-2"
              />
            </div>

            <button className="mt-2 bg-primary py-2" type="submit">
              Додати курс
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default CourseForm;
