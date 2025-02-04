import kursData from "./coursesDataOn";
import SingleKurs from "./SingleCourseOn";

const OfflineCourses = () => {
  return (
    <div className=" px-4 py-10">
      <div className="container mx-auto">
        {/* Заголовок */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white">
            Чому варто обрати наші офлайн-курси?
          </h1>
          <p className="text-lg text-gray-600 dark:text-white">
            Усього за 10 днів ви отримаєте необхідні знання й практичний досвід,
            щоб стати професіоналом.
          </p>
        </div>

        {/* Переваги */}
        <div className="mb-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg  bg-gray-dark p-6 shadow-md">
            <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
              Теорія для старту
            </h2>
            <p className="text-gray-600 dark:text-white">
              Ми надаємо всі основи, які потрібні для роботи, включаючи новітні
              методики, інструменти та підходи.
            </p>
          </div>
          <div className="rounded-lg  p-6 shadow-md dark:bg-gray-dark">
            <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
              Практика щодня
            </h2>
            <p className="text-gray-600 dark:text-white">
              Щоденні практичні заняття допоможуть вам швидко відточити свої
              навички під керівництвом досвідчених майстрів.
            </p>
          </div>
          <div className="rounded-lg  p-6 shadow-md dark:bg-gray-dark">
            <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
              Зворотний зв’язок
            </h2>
            <p className="text-gray-600 dark:text-white">
              Отримуйте корисні поради від викладачів, які допоможуть вам стати
              впевненими у своїй роботі.
            </p>
          </div>
          <div className="rounded-lg  p-6 shadow-md dark:bg-gray-dark">
            <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
              Підтримка та натхнення
            </h2>
            <p className="text-gray-600 dark:text-white">
              Навчання в групі – це можливість спілкуватися з однодумцями та
              отримувати мотивацію для розвитку.
            </p>
          </div>
        </div>

        {/* Курси */}
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
            Наші курси
          </h2>
          <p className="text-gray-600 dark:text-white">
            Обирайте той напрямок, який вам до душі, і розпочинайте навчання вже
            сьогодні.
          </p>
        </div>
        <div className="-mx-4 grid gap-6 md:grid-cols-2 xl:grid-cols-3 ">
          {kursData.map((kurs) => (
            <div
              key={kurs.id}
              className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 "
            >
              <SingleKurs blog={kurs} />
            </div>
          ))}
        </div>

        {/* Заклик до дії */}
        <div className="mt-10 text-center">
          <p className="mb-4 text-lg text-gray-700 dark:text-white">
            Не відкладайте свої мрії! Запишіться на курс уже сьогодні.
          </p>
          <button className="rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-blue-700">
            Записатися на курс
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfflineCourses;
