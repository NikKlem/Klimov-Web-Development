'use client';
import useStudents from '@/hooks/useStudents';
import StudentsInterface from '@/types/StudentsInterface';
import styles from './Students.module.scss';

const Students = (): React.ReactElement => {
  const { students } = useStudents();
  return (
    <div className={styles.Students}>
      <h2>Студенты</h2>
      <div className={styles.list}>
        {students.length === 0 && <div>Студентов нет</div>}
        {students.map((student: StudentsInterface) => (
          <div key={student.id} className={styles.student}>
            {student.first_name} (ID: {student.id}) - Группа ID: {student.groupId}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
